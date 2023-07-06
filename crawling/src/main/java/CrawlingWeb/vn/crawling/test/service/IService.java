package CrawlingWeb.vn.crawling.test.service;

import java.io.IOException;
import java.util.List;


import CrawlingWeb.vn.crawling.test.Data.Datas;
import CrawlingWeb.vn.crawling.test.Data.Detail;

public interface IService {
	
	List<String> getYear(String url) throws IOException;
	
	List<String> getGrand(String url) throws IOException;
	
	List<String> getType(String url) throws IOException;
	
	List<Detail> getData(String url);
	
	List<Datas> getAllData(String url);
	
	Detail getFastestLap(String url, Detail detail);
	
	Detail getPitStop(String url, Detail detail);
	
	Detail getPractice(String url, String no,Detail detail);
	
	Detail getQuantity(String url, Detail detail);
	
	void saveData(String name, String data);
	
}
