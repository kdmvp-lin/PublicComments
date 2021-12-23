<template>
    <div>
      <div class="mui-content">
        <div id="slider" class="mui-slider">
<!--          点击选项-->
          <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <a class="mui-control-item" >
              怎么玩
            </a>
            <a class="mui-control-item" >
              游景点
            </a>
            <a class="mui-control-item" >
              定住宿
            </a>
          </div>
          <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4"></div>
          <div class="mui-slider-group">
            <div id="item6mobile" class="mui-slider-item mui-control-content mui-active">
              <div id="scroll1" class="mui-scroll-wrapper">
                <div class="mui-scroll">
                  <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                      <img  class="img" src="https://p0.meituan.net/dpmerchantpic/c5ae8445d21d623fb1e6e3b109a86f421926695.jpg%40120w_90h_1e_1c_1l_80q%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                      <div>罪案调查局</div>
                    </li>
                    <li class="mui-table-view-cell">
                      <img  class="img" src="https://p1.meituan.net/dpmerchantpic/c6c3216775b8354dd3f6bb03e5dc6ddd597976.jpg%40120w_90h_1e_1c_1l_80q%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                      <div>蓝惊灵沉浸式体验馆</div>
                    </li>
                    <li   class="mui-table-view-cell">
                      <img class="img" src="https://img.meituan.net/msmerchant/1017736975ddcc99d0da1b313c525a15133577.jpg%40340w_192h_1e_1l%7Cwatermark%3D0">
                      <div>无爲舍茶蔬院</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="item7mobile" class="mui-slider-item mui-control-content">
              <div id="scroll2" class="mui-scroll-wrapper">
                <div class="mui-scroll">
                      <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                          <img class="img" src="http://qcloud.dpfile.com/pc/TvJexiGanbbU5hGMprvUVPjQ-Mu0JBzjjEIQsFnGkL9XOxlrP9OrbeXc-9wcX0t4tOnd3gXQdDYlAqlaVaAFeZ0rYYyiRo_EhzufqWWjTjs.jpg">
                          <div>温州藻溪公园</div>
                        </li>
                        <li class="mui-table-view-cell">
                          <img class="img" src="http://p0.meituan.net/tdctraveldark/aa93db5b5b8b5d8d8a4b457ea7b82b3e390699.png">
                          <div>故宫博物院(故宫)</div>
                        </li>
                        <li class="mui-table-view-cell">
                          <img class="img" src="http://p0.meituan.net/travel/6640a6327aee465b8fbe12b359df53e0217800.jpg">
                          <div>郎园Vintage创意园</div>
                        </li>
                      </ul>
                </div>
              </div>

            </div>
            <div id="item8mobile" class="mui-slider-item mui-control-content">
              <div id="scroll3" class="mui-scroll-wrapper">
                <div class="mui-scroll">
                  <ul class="mui-table-view">
                    <li class="mui-table-view-cell">
                      <img  class="img" src="http://p0.meituan.net/tdchoteldark/4814b00050aa1cabc85aa62b97b13a8d4467515.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                      <div>温州香格里拉大酒店</div>
                    </li>
                    <li class="mui-table-view-cell">
                      <img class="img" src="http://p0.meituan.net/tdchoteldark/dce553c834eb3a40fcc65cb014b8509d415627.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                      <div>溪山外独立溪谷酒店</div>
                    </li>
                    <li class="mui-table-view-cell">
                      <img class="img" src="http://p0.meituan.net/tdchoteldark/a9d31dcf97ca058444f7750b01c5c36a397182.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                      <div>温州空港万豪酒店</div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "HomeClick"
    }
</script>

<style scoped>
  *{
    touch-action: pan-y;

    touch-action: pan-x;
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item
  {
    font-size: 1.3rem;
  }
  .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active
  {
    color:#ff6b37;
    font-weight:bold;
  }
  .mui-segmented-control.mui-segmented-control-inverted~.mui-slider-progress-bar {
    background-color: #ff6b37;
  }
  .mui-content
  {
    background-color: white;
  }
  .mui-table-view-cell{
    color: black;

  }
  .mui-table-view-cell{
    padding: 0;
    width:32%;
    height: 10rem;
    display: inline-block;
    padding-left: .5rem;
    padding-top: .5rem;

  }
  .img
  {
    width: 100%;
    height: 60%;
  }
  .mui-table-view-cell div{
    font-family:宋体;
    font-size: .5rem;
  }
  .mui-table-view-cell:after {
    position: absolute;
    right: 0;
    bottom: -10px;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: black;
    margin-bottom: -5rem;
  }
  /*控制总高*/
  .mui-control-content {
    background-color: white;
    min-height:150px;
  }
  .mui-control-content .mui-loading {
    margin-top: 50px;
  }

</style>
