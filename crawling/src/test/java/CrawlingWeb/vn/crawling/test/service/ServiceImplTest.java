package CrawlingWeb.vn.crawling.test.service;

import junit.framework.TestCase;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.junit.jupiter.api.Test;

import com.google.gson.Gson;

import CrawlingWeb.vn.crawling.test.Data.Datas;
import CrawlingWeb.vn.crawling.test.Data.Detail;

public class ServiceImplTest extends TestCase {
	
	 IService service = new ServiceImpl();

	@Test
	public	void testService1() {
		try {
			List<String> url = service.getYear("https://www.formula1.com/en/results.html");
//			assertEquals(url, null);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void testService2() throws IOException {
//	 String url = "https://www.formula1.com/en/results.html/2023/races/1141/bahrain";
		String url1 = "https://www.formula1.com/en/results.html";
	 System.out.println("get summary race");
	 List<String> years = service.getYear(url1);
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 years.remove(years.remove(0));
	 for (String year : years) {
		 url1 = "https://www.formula1.com/en/results.html";
		 List<String> types = service.getType(url1);
//		 List<String> grands = service.getGrand(url1);
		 String url2 =url1 + "/"+year+"/"+types.get(0);
	System.out.println("url2: "+url2);
	 List<String> grands = service.getGrand(url2+"/races.html");
		 List<Datas>  datas = service.getAllData(url2+"/races.html");
	
//			 System.out.println(data1);
		
			 for(int i = 1 ; i < grands.size(); i++) {	
				String mapName = grands.get(i).split("/")[1];
				for (Datas data : datas) {
					if(mapName.equals(data.getGrandPrix().toLowerCase())) {
						String url = url2 +"/"+grands.get(i);
						 System.out.println("grands.size()"+ url);
						 List<Detail> details =	service.getData(url);
						 System.out.println("get detail race bahrain");
						 if(!details.isEmpty()){
							 for (Detail detail : details) {	
									System.out.println(detail.getPos() +"   "+ detail.getNo());
//									 System.out.println("get detail race fastest");
									detail = service.getFastestLap(url, detail);
//									 System.out.println("get detail race Pit stop");
									detail = service.getPitStop(url, detail);
//									 System.out.println("get detail race quantity");
									detail = service.getQuantity(url, detail);
									 System.out.println("get detail race Practice 1");
									detail = service.getPractice(url, "1", detail);
									 System.out.println("get detail race  Practice 2");
									detail = service.getPractice(url, "2", detail);
									 System.out.println("get detail race  Practice 3");
									detail = service.getPractice(url, "3", detail);
									
									
								}
							 
//								datas.get(i-1).setDetail(details);
						 }
						data.setDetail(details);
					}
				}
					
					
			
		}
		
			 String json = new Gson().toJson(datas);
				
				System.out.println("data : "  +json);
				
				service.saveData(year, json);
	}
//	 url += "/2023/races/1141/bahrain";
		
	}
	
}
