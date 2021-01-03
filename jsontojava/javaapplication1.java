import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class javaapplication1 {
    public static void main(String[] args) {

        JSONParser parser = new JSONParser();

        try {
            Object obj = parser.parse(new FileReader("C:\\Users\\xogns\\Documents\\any\\서울시 공중화장실 위치정보 (좌표계_ WGS1984).json"));

            JSONObject jsonObject =  (JSONObject) obj;
            JSONArray parse_data = (JSONArray) jsonObject.get("DATA");

            Object data_xO;
            Object data_yO;
            double x_setD = 127.08345667; // x 좌표 대입
            double y_setD = 37.73345; // y 좌표 대입
            double data_xD;
            double data_yD;
            double area_x = 0.01;
            double area_y = 0.07;

            for(int j=0; j<parse_data.size(); j++) {
                JSONObject parse_te = (JSONObject) parse_data.get(j);
                data_xO = parse_te.get("lng"); // X 값 추출
                data_yO = parse_te.get("lat"); // Y 값 추출
                data_xD = Double.parseDouble((String)data_xO); //x 좌표 Double 변환
                data_yD = Double.parseDouble((String)data_yO); //y 좌표 Double 변환


                if (x_setD + area_x > data_xD) {
                    if(x_setD - area_x < data_xD){
                        if(y_setD + area_y> data_yD){
                            if(y_setD - area_y < data_yD){
                                System.out.println(parse_data.get(j));

                            }
                        }
                    }
                }
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }}
