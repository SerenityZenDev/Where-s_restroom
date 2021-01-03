
        
        
    
    // 라디오 박스를 체크했을 때 반응할 함수
    function check(){
        // 새로운 지도 불러오기
        // -> 기존에 체크한 마크를 지우고 원하는 마크를 나타낼 수 없어서 새로운 지도를 불러냄
        
        // 라디오 박스의 개수만큼 반복문을 통해 체크된 값 가져오기
        var count = document.getElementsByName("radiocheck").length;
        for(var j=0; j<count; j++){
            if(document.getElementsByName("radiocheck")[j].checked == true){
                var val = document.getElementsByName("radiocheck")[j].value;
                fetch("서울시 공중화장실 위치정보 (좌표계_ WGS1984).json")
                .then(response => response.json())
                .then(data => {
                    var i = 0;
                    var marker = [];
                    while(data.DATA[i] != Error || data.DATA[i] != null || data.DATA[i] != 0){
                            if( val == data.DATA[i].gu_nm){
                                // 데이터 중 체크된 값과 같은 데이터의 x, y 값을 가져옴
                                marker[i] = new naver.maps.Marker({
                                position: new naver.maps.LatLng(data.DATA[i].lat, data.DATA[i].lng),
                                map: map
                            }); 
                            
                        }                                                                                                   
                        i += 1;
                    }
                })
                
                break;
            }
        }
    }
    function clear2(){
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(37.5666805, 126.9784147),
            zoom: 10,
            mapTypeId: naver.maps.MapTypeId.NORMAL
        });
        
        var infowindow = new naver.maps.InfoWindow();
        
        function onSuccessGeolocation(position) {
            var location = new naver.maps.LatLng(position.coords.latitude,
                                                 position.coords.longitude);
        
            map.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
            map.setZoom(10); // 지도의 줌 레벨을 변경합니다.
        
            infowindow.setContent('<div style="padding:20px;">' + '현재위치' + '</div>');
        
            infowindow.open(map, location);
            console.log('Coordinates: ' + location.toString());
        }
        
        function onErrorGeolocation() {
            var center = map.getCenter();
        
            infowindow.setContent('<div style="padding:20px;">' +
                '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>'+ "latitude: "+ center.lat() +"<br />longitude: "+ center.lng() +'</div>');
        
            infowindow.open(map, center);
        }
        
       // $(window).on("load", function() {
            if (navigator.geolocation) {
                /**
                 * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
                 * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
                 * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
                 */
                navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
            } else {
                var center = map.getCenter();
                infowindow.setContent('<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>');
                infowindow.open(map, center);
            }
       // });
    }
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5666805, 126.9784147),
        zoom: 10,
        mapTypeId: naver.maps.MapTypeId.NORMAL
    });
    
    var infowindow = new naver.maps.InfoWindow();
    
    function onSuccessGeolocation(position) {
        var location = new naver.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);
    
        map.setCenter(location); // 얻은 좌표를 지도의 중심으로 설정합니다.
        map.setZoom(10); // 지도의 줌 레벨을 변경합니다.
    
        infowindow.setContent('<div style="padding:20px;">' + '현재위치' + '</div>');
    
        infowindow.open(map, location);
        console.log('Coordinates: ' + location.toString());
    }
    
    function onErrorGeolocation() {
        var center = map.getCenter();
    
        infowindow.setContent('<div style="padding:20px;">' +
            '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>'+ "latitude: "+ center.lat() +"<br />longitude: "+ center.lng() +'</div>');
    
        infowindow.open(map, center);
    }
    
   // $(window).on("load", function() {
        if (navigator.geolocation) {
            /**
             * navigator.geolocation 은 Chrome 50 버젼 이후로 HTTP 환경에서 사용이 Deprecate 되어 HTTPS 환경에서만 사용 가능 합니다.
             * http://localhost 에서는 사용이 가능하며, 테스트 목적으로, Chrome 의 바로가기를 만들어서 아래와 같이 설정하면 접속은 가능합니다.
             * chrome.exe --unsafely-treat-insecure-origin-as-secure="http://example.com"
             */
            navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
        } else {
            var center = map.getCenter();
            infowindow.setContent('<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>');
            infowindow.open(map, center);
        }
   // });
    
    
