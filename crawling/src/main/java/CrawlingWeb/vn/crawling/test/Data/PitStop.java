package CrawlingWeb.vn.crawling.test.Data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PitStop {
	
	private Integer stops;
	
	private Integer lap;
	
	private String timeOfDay;
	
	private String time;
	
	private String total;
}
