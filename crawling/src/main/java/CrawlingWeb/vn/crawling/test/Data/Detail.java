package CrawlingWeb.vn.crawling.test.Data;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Detail {
	
//	private String grandPrix;
	
//	private String date;
	
	private Integer pos;
	
	private Integer no;
	
	private String driver;
	
	private String team;
	
	private Integer laps;
	
	private String time;
	
	private Float pts;
	
	private String staringGripTime;
	
	private FastestLap fastestLap;
	
	private PitStop pitStop;
	
	private Quantity quantity;
	
	private Practice practice1;
	
	private Practice practice2;
	
	private Practice practice3;
	
	
}
