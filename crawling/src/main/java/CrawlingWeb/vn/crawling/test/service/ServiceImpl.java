package CrawlingWeb.vn.crawling.test.service;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.jsoup.select.Evaluator.IsEmpty;

import CrawlingWeb.vn.crawling.test.Data.Datas;
import CrawlingWeb.vn.crawling.test.Data.Detail;
import CrawlingWeb.vn.crawling.test.Data.FastestLap;
import CrawlingWeb.vn.crawling.test.Data.PitStop;
import CrawlingWeb.vn.crawling.test.Data.Practice;
import CrawlingWeb.vn.crawling.test.Data.Quantity;

public class ServiceImpl implements IService {

	public List<String> getGrand(String Url) throws IOException {
	  
		List<String> listURL = new ArrayList<String>();
		Document document = Jsoup.connect(Url).get();
		Elements elms = document.getElementsByClass("resultsarchive-filter-item");
		if(elms.isEmpty()) {
			return listURL;
		}
		for (int i = 0; i < elms.size(); i++) {
			Elements elm_row = elms.get(i).getElementsByTag("a");
			for (int j = 0; j < elm_row.size(); j++) {
//                String link_chap = elm_row.first().text();
				Map<String, String> maptest = elm_row.first().dataset();

				if (maptest.containsValue("meetingKey")) {
					listURL.add(maptest.get("value"));
				}
//               
//                
			}
		}
		System.out.println(listURL.toString());
		return listURL;
	}
	
	public List<String> getYear(String Url) throws IOException {
	  
		List<String> listURL = new ArrayList<String>();
		Document document = Jsoup.connect(Url).get();
		Elements elms = document.getElementsByClass("resultsarchive-filter-item");
		if(elms.isEmpty()) {
			return listURL;
		}
		for (int i = 0; i < elms.size(); i++) {
			Elements elm_row = elms.get(i).getElementsByTag("a");
			for (int j = 0; j < elm_row.size(); j++) {
//                String link_chap = elm_row.first().text();
				Map<String, String> maptest = elm_row.first().dataset();

				if (maptest.containsValue("year")) {
					listURL.add(maptest.get("value"));
				}
//               
//                
			}
		}
		System.out.println(listURL.toString());
		return listURL;
	}
	
	public List<String> getType(String Url) throws IOException {
	  
		List<String> listURL = new ArrayList<String>();
		Document document = Jsoup.connect(Url).get();
		Elements elms = document.getElementsByClass("resultsarchive-filter-item");
		if(elms.isEmpty()) {
			return listURL;
		}
		for (int i = 0; i < elms.size(); i++) {
			Elements elm_row = elms.get(i).getElementsByTag("a");
			for (int j = 0; j < elm_row.size(); j++) {
//                String link_chap = elm_row.first().text();
				Map<String, String> maptest = elm_row.first().dataset();

				if (maptest.containsValue("apiType")) {
					listURL.add(maptest.get("value"));
				}
//               
//                
			}
		}
		System.out.println(listURL.toString());
		return listURL;
	}

	public List<Detail> getData(String url) {
		Document document;
		List<Detail> details = new ArrayList<Detail>();
		try {
			document = Jsoup.connect(url + "/race-result.html").get();
			Elements elms = document.getElementsByTag("table");
			if(elms.isEmpty()) {
				return details;
			}
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					Integer pos = null;
					if(!tds.get(1).text().equals("NC") &&  !tds.get(1).text().equals("DQ") && !tds.get(1).text().equals("EX")) {
						pos =	Integer.parseInt(tds.get(1).text());
					}
					Detail detail = Detail.builder()
							.pos(pos)
							.no(Integer.parseInt(tds.get(2).text()))
							.driver(tds.get(3).text())
							.team(tds.get(4).text())
							.laps(tds.get(5).text().equals("") ? null : Integer.parseInt(tds.get(5).text()))
							.time(tds.get(6).text())
							.pts(Float.parseFloat(tds.get(7).text())).build();
					detail.setStaringGripTime(getGrid(url, detail));

//							System.out.println(detail.toString() );
					details.add(detail);

				}
			}
			
			return details;
		} catch (IOException e) {
			return null;
		}
//		return null;
	}

	public List<Datas> getAllData(String url) {
		Document document;
		List<Datas> datas = new ArrayList<Datas>();
		try {
		
			document = Jsoup.connect(url + "/races.html").get();
			Elements elms = document.getElementsByTag("table");
			if(elms.isEmpty()) {
				return datas;
			}
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					Datas data = Datas.builder().year(tds.get(2).text()).grandPrix(tds.get(1).text()).build();
					datas.add(data);

				}
				return datas;
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			return datas;
		}
		return null;
	}

	public void saveDate(List datas) {
		// TODO Auto-generated method stub

	}

	public Detail getFastestLap(String url, Detail detail) {
		Document document;
		try {
			System.out.println("getFastestLap: " + url + " " + detail.getNo());
			document = Jsoup.connect(url + "/fastest-laps.html").get();
			Elements elms = document.getElementsByTag("table");
			
			if(elms.isEmpty()) {
				return detail;
			}
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					if (!tds.get(2).text().isEmpty() && detail.getNo() != Integer.parseInt(tds.get(2).text())) {
						
						String avg = tds.get(8).text();
						Float avgFloat = null;
						if(!avg.isEmpty()) {
							 avgFloat = Float.parseFloat(tds.get(8).text());
						}
						FastestLap fast = FastestLap.builder().lap(Integer.parseInt(tds.get(5).text()))
								.timeOfDay(tds.get(6).text()).time(tds.get(7).text())
								.avgSpeed(avgFloat)
								.build();
						detail.setFastestLap(fast);
						return detail;
					}
				}
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			return detail;
		}
		return null;
	}

	public Detail getPitStop(String url, Detail detail) {
		Document document;
		try {
			document = Jsoup.connect(url + "/pit-stop-summary.html").get();
			Elements elms = document.getElementsByTag("table");
			if(elms.isEmpty()) {
				return detail;
			}
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					Integer lapsI = null;
					Integer stopI = null;
					if(tds.get(5).text() !="" && !tds.get(5).text().isEmpty()) {
						lapsI = Integer.parseInt(tds.get(5).text());
					}
					if(tds.get(1).text() !="" && !tds.get(1).text().isEmpty() && !tds.get(1).text().equals("NC")) {
						stopI = Integer.parseInt(tds.get(1).text());
					}
					if (!tds.get(2).text().isEmpty() && detail.getNo() == Integer.parseInt(tds.get(2).text())) {
						
						PitStop stop = PitStop.builder().stops(stopI)
								.lap(lapsI).timeOfDay(tds.get(6).text())
								.time(tds.get(7).text()).total(tds.get(8).text()).build();
//						System.out.println(stop);
						detail.setPitStop(stop);
						return detail;
					}
				}
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			return detail;
		}
		return detail;
	}

	public Detail getPractice(String url, String no, Detail detail) {
		Document document;
		try {
			document = Jsoup.connect(url + "/practice-" + no + ".html").get();
			Elements elms = document.getElementsByTag("table");
			if(elms.isEmpty()) {
				return detail;
			}
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					Integer lapsI = null;
					if(tds.get(7).text() !="" && !tds.get(7).text().isEmpty() && !tds.get(7).text().contains(":")) {
						lapsI = Integer.parseInt(tds.get(7).text());
					}
					if (tds.get(2).text().isEmpty() ) {
						return detail;
					} else if(detail.getNo() == Integer.parseInt(tds.get(2).text())){
						Practice practice = Practice.builder().time(tds.get(5).text()).gap(tds.get(6).text())
								.laps(lapsI).build();
System.out.println("getPractice: "+tds.get(6).html());
						if (no.equals("1")) {
							detail.setPractice1(practice);
						} else if (no.equals("2")) {
							detail.setPractice2(practice);
						} else if (no.equals("3")) {
							detail.setPractice3(practice);
						}

						return detail;
					}
				}
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
//			return detail;
			return detail;
		}
		return detail;
	}

	public Detail getQuantity(String url, Detail detail) {
		Document document;
		try {
			document = Jsoup.connect(url + "/qualifying.html").get();
			Elements elms = document.getElementsByTag("table");
			if(elms.isEmpty()) {
				return detail;
			}
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					Integer lapsI = null;
					if(tds.get(8).text() !="" && !tds.get(8).text().isEmpty()) {
						lapsI = Integer.parseInt(tds.get(8).text());
					}
//					System.out.println(detail.getNo());
					if (!tds.get(2).text().isEmpty() && detail.getNo() == Integer.parseInt(tds.get(2).text())) {
						Quantity quantity = Quantity.builder()
								.q1(tds.get(5).text())
								.q2(tds.get(6).text())
								.q3(tds.get(7).text())
								.laps(lapsI)
								.build();
						detail.setQuantity(quantity);
						return detail;
					}
				}
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			return detail;
		}
		return detail;
	}

	public void saveData(String name, String data) {
		try {
		      FileWriter myWriter = new FileWriter(name+".json");
		      myWriter.write(data);
		      myWriter.close();
		      System.out.println("Successfully wrote to the file.");
		    } catch (IOException e) {
		      System.out.println("An error occurred.");
		      e.printStackTrace();
		    }

	}

	public String getGrid(String url, Detail detail) {
		Document document;
		try {
			document = Jsoup.connect(url + "/starting-grid.html").get();
			Elements elms = document.getElementsByTag("table");
			Elements table = elms.get(0).getElementsByTag("tbody");
			for (Element element : table) {
				Elements trs = element.getElementsByTag("tr");
				for (Element tr : trs) {
					Elements tds = tr.getElementsByTag("td");
					if (detail.getNo() == Integer.parseInt(tds.get(2).text())) {
//						detail.setStaringGripTime(tds.get(5).text());
						return tds.get(5).text();
					}
				}
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			return null;
		}
		return null;
	}

}
