const container = document.getElementById('map');

// CH 주식회사 위치
const CH_LOCATION = new kakao.maps.LatLng(37.86220105625497, 126.87067048447848); 

// 지도 default 출력
var options = {
    center: CH_LOCATION,
    level: 6
};

var map = new kakao.maps.Map(container, options);

//<div class="title" style="margin-bottom: 220px; margin-left: 6px;"><h2>경기산학융합원</h2></div>

// 마커 표시
var marker = new kakao.maps.Marker({
    position: CH_LOCATION, // 마커의 좌표
    map: map // 마커를 표시할 지도 객체
});