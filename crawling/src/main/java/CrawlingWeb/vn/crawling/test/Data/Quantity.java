package CrawlingWeb.vn.crawling.test.Data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Quantity {
	private String q1;
	private String q2;
	private String q3;
	private Integer laps;
}
