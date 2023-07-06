package CrawlingWeb.vn.crawling.test.Data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Practice {
	private String time;
	
	private String gap;
	
	private Integer laps;
}
