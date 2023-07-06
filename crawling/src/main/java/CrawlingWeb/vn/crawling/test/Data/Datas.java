package CrawlingWeb.vn.crawling.test.Data;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Datas {
	private String year;
	
	private String type;
	
	private String grandPrix;
	
	private List<Detail> detail;
	
}
