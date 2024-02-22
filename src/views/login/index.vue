<template>
  <div class="loginPage">
    <div class="title-Picture">
      <!-- <img class="home-logo W_l" src="https://imagev2.xmcdn.com/storages/3777-audiofreehighqps/49/07/GMCoOSMH3Kb7AAAPQgH_va2X.png"> -->
      <img class="image" src="../../assets/404_images/5eeac5376d63257e67421a3e6e0985bc.jpeg" alt="">
    </div>


    <div class="xui-modal-body">
      <div class="login-tab-btn"><i class="xuicon xuicon-denglu-qiehuan-erweima"></i></div>
      <div class="login-pop__closeBtn"><i class="xuicon xuicon-denglu-guanbi"></i></div>
      <div class="login-pop">
        <div role="tabs" class="login-pop-tabs">
          <div class="login-pop-tab-nav-wrap clearfix" style="font-size: 0px;">
            <div style="display: inline-block;"></div>
            <div class="login-pop-tab-nav" role="tab-nav">
              <ul>
                <li role="tab" class="active login-pop-tab-nav__tab">密码登录</li>
                <li role="tab" class="login-pop-tab-nav__tab">短信登录/注册</li>
              </ul>
              <div class="login-pop-ink-bar" role="ink-bar" style="width: 92px; transform: translateX(0px);"></div>
            </div>
          </div>
          <div role="tab-content" class="login-pop-tab-content">
            <div role="tab-panel" class="login-pop-tab-panel active">
              <form role="form" class="login-pop__form">
                <div class="login-pop__form-item error">
                  <div class="phone-input">
                    <div class="phone-input__selector"><span class="phone-input__code">+86</span><span
                        class="arrow arrow-bottom"></span></div><input name="accountName" id="accountName" type="text"
                      autocomplete="username" class="phone-input__input" role="phone-num" placeholder="手机号或邮箱" value="">
                    <div role="sub-menu" class="phone-input__list">
                      <ul>
                        <li role="option">中国<span class="fr" style="padding-right: 24px;">+86</span></li>
                        <li role="option">中国台湾<span class="fr" style="padding-right: 24px;">+886</span></li>
                        <li role="option">中国香港<span class="fr" style="padding-right: 24px;">+852</span></li>
                        <li role="option">中国澳门<span class="fr" style="padding-right: 24px;">+853</span></li>
                        <li role="option">美国<span class="fr" style="padding-right: 24px;">+1</span></li>
                        <li role="option">阿鲁巴<span class="fr" style="padding-right: 24px;">+297</span></li>
                        <li role="option">阿富汗<span class="fr" style="padding-right: 24px;">+93</span></li>
                        <li role="option">安哥拉<span class="fr" style="padding-right: 24px;">+244</span></li>
                        <li role="option">安圭拉<span class="fr" style="padding-right: 24px;">+1264</span></li>
                        <li role="option">阿尔巴尼亚<span class="fr" style="padding-right: 24px;">+355</span></li>
                        <li role="option">奥兰群岛<span class="fr" style="padding-right: 24px;">+358</span></li>
                        <li role="option">安道尔<span class="fr" style="padding-right: 24px;">+376</span></li>
                        <li role="option">阿联酋<span class="fr" style="padding-right: 24px;">+971</span></li>
                        <li role="option">阿根廷<span class="fr" style="padding-right: 24px;">+54</span></li>
                        <li role="option">亚美尼亚<span class="fr" style="padding-right: 24px;">+374</span></li>
                        <li role="option">美属萨摩亚<span class="fr" style="padding-right: 24px;">+1684</span></li>
                        <li role="option">南极洲<span class="fr" style="padding-right: 24px;">+672</span></li>
                        <li role="option">安提瓜和巴布达<span class="fr" style="padding-right: 24px;">+1268</span></li>
                      <li role="option">澳大利亚<span class="fr" style="padding-right: 24px;">+61</span></li>
                      <li role="option">奥地利<span class="fr" style="padding-right: 24px;">+43</span></li>
                      <li role="option">阿塞拜疆<span class="fr" style="padding-right: 24px;">+994</span></li>
                      <li role="option">布隆迪<span class="fr" style="padding-right: 24px;">+257</span></li>
                      <li role="option">比利时<span class="fr" style="padding-right: 24px;">+32</span></li>
                      <li role="option">贝宁<span class="fr" style="padding-right: 24px;">+229</span></li>
                      <li role="option">布基纳法索<span class="fr" style="padding-right: 24px;">+226</span></li>
                      <li role="option">孟加拉<span class="fr" style="padding-right: 24px;">+880</span></li>
                      <li role="option">保加利亚<span class="fr" style="padding-right: 24px;">+359</span></li>
                      <li role="option">巴林<span class="fr" style="padding-right: 24px;">+973</span></li>
                      <li role="option">巴哈马<span class="fr" style="padding-right: 24px;">+1242</span></li>
                      <li role="option">波斯尼亚和黑塞哥维那<span class="fr" style="padding-right: 24px;">+387</span></li>
                      <li role="option">圣巴泰勒米岛<span class="fr" style="padding-right: 24px;">+290</span></li>
                      <li role="option">白俄罗斯<span class="fr" style="padding-right: 24px;">+375</span></li>
                      <li role="option">伯利兹<span class="fr" style="padding-right: 24px;">+501</span></li>
                      <li role="option">百慕大<span class="fr" style="padding-right: 24px;">+1441</span></li>
                      <li role="option">玻利维亚<span class="fr" style="padding-right: 24px;">+591</span></li>
                      <li role="option">巴西<span class="fr" style="padding-right: 24px;">+55</span></li>
                      <li role="option">巴巴多斯<span class="fr" style="padding-right: 24px;">+1246</span></li>
                      <li role="option">文莱<span class="fr" style="padding-right: 24px;">+673</span></li>
                      <li role="option">不丹<span class="fr" style="padding-right: 24px;">+975</span></li>
                      <li role="option">博茨瓦纳<span class="fr" style="padding-right: 24px;">+267</span></li>
                      <li role="option">中非<span class="fr" style="padding-right: 24px;">+236</span></li>
                      <li role="option">加拿大<span class="fr" style="padding-right: 24px;">+1</span></li>
                      <li role="option">瑞士<span class="fr" style="padding-right: 24px;">+41</span></li>
                      <li role="option">智利<span class="fr" style="padding-right: 24px;">+56</span></li>
                      <li role="option">科特迪瓦<span class="fr" style="padding-right: 24px;">+225</span></li>
                      <li role="option">喀麦隆<span class="fr" style="padding-right: 24px;">+237</span></li>
                      <li role="option">刚果(金)<span class="fr" style="padding-right: 24px;">+243</span></li>
                      <li role="option">刚果(布)<span class="fr" style="padding-right: 24px;">+242</span></li>
                      <li role="option">库克群岛<span class="fr" style="padding-right: 24px;">+682</span></li>
                      <li role="option">哥伦比亚<span class="fr" style="padding-right: 24px;">+57</span></li>
                      <li role="option">科摩罗<span class="fr" style="padding-right: 24px;">+269</span></li>
                      <li role="option">佛得角<span class="fr" style="padding-right: 24px;">+238</span></li>
                      <li role="option">哥斯达黎加<span class="fr" style="padding-right: 24px;">+506</span></li>
                      <li role="option">古巴<span class="fr" style="padding-right: 24px;">+53</span></li>
                      <li role="option">库拉索<span class="fr" style="padding-right: 24px;">+5999</span></li>
                      <li role="option">开曼群岛<span class="fr" style="padding-right: 24px;">+1345</span></li>
                      <li role="option">塞浦路斯<span class="fr" style="padding-right: 24px;">+357</span></li>
                      <li role="option">捷克<span class="fr" style="padding-right: 24px;">+420</span></li>
                      <li role="option">德国<span class="fr" style="padding-right: 24px;">+49</span></li>
                      <li role="option">吉布提<span class="fr" style="padding-right: 24px;">+253</span></li>
                      <li role="option">多米尼克<span class="fr" style="padding-right: 24px;">+1767</span></li>
                      <li role="option">丹麦<span class="fr" style="padding-right: 24px;">+45</span></li>
                      <li role="option">多米尼加<span class="fr" style="padding-right: 24px;">+1809</span></li>
                      <li role="option">阿尔及利亚<span class="fr" style="padding-right: 24px;">+213</span></li>
                      <li role="option">厄瓜多尔<span class="fr" style="padding-right: 24px;">+593</span></li>
                      <li role="option">埃及<span class="fr" style="padding-right: 24px;">+20</span></li>
                      <li role="option">厄立特里亚<span class="fr" style="padding-right: 24px;">+291</span></li>
                      <li role="option">西班牙<span class="fr" style="padding-right: 24px;">+34</span></li>
                      <li role="option">爱沙尼亚<span class="fr" style="padding-right: 24px;">+372</span></li>
                      <li role="option">埃塞俄比亚<span class="fr" style="padding-right: 24px;">+251</span></li>
                      <li role="option">芬兰<span class="fr" style="padding-right: 24px;">+358</span></li>
                      <li role="option">斐济<span class="fr" style="padding-right: 24px;">+679</span></li>
                      <li role="option">福克兰群岛<span class="fr" style="padding-right: 24px;">+500</span></li>
                      <li role="option">法国<span class="fr" style="padding-right: 24px;">+33</span></li>
                      <li role="option">法罗群岛<span class="fr" style="padding-right: 24px;">+298</span></li>
                      <li role="option">密克罗尼西亚联邦<span class="fr" style="padding-right: 24px;">+691</span></li>
                      <li role="option">加蓬<span class="fr" style="padding-right: 24px;">+241</span></li>
                      <li role="option">英国<span class="fr" style="padding-right: 24px;">+44</span></li>
                      <li role="option">格鲁吉亚<span class="fr" style="padding-right: 24px;">+995</span></li>
                      <li role="option">加纳<span class="fr" style="padding-right: 24px;">+233</span></li>
                      <li role="option">直布罗陀<span class="fr" style="padding-right: 24px;">+350</span></li>
                      <li role="option">几内亚<span class="fr" style="padding-right: 24px;">+224</span></li>
                      <li role="option">冈比亚<span class="fr" style="padding-right: 24px;">+220</span></li>
                      <li role="option">几内亚比绍<span class="fr" style="padding-right: 24px;">+245</span></li>
                      <li role="option">赤道几内亚<span class="fr" style="padding-right: 24px;">+240</span></li>
                      <li role="option">希腊<span class="fr" style="padding-right: 24px;">+30</span></li>
                      <li role="option">格林纳达<span class="fr" style="padding-right: 24px;">+1473</span></li>
                      <li role="option">格陵兰<span class="fr" style="padding-right: 24px;">+299</span></li>
                      <li role="option">危地马拉<span class="fr" style="padding-right: 24px;">+502</span></li>
                      <li role="option">关岛<span class="fr" style="padding-right: 24px;">+1671</span></li>
                      <li role="option">圭亚那<span class="fr" style="padding-right: 24px;">+592</span></li>
                      <li role="option">洪都拉斯<span class="fr" style="padding-right: 24px;">+504</span></li>
                      <li role="option">克罗地亚<span class="fr" style="padding-right: 24px;">+385</span></li>
                      <li role="option">海地<span class="fr" style="padding-right: 24px;">+509</span></li>
                      <li role="option">匈牙利<span class="fr" style="padding-right: 24px;">+36</span></li>
                      <li role="option">印度尼西亚<span class="fr" style="padding-right: 24px;">+62</span></li>
                      <li role="option">印度<span class="fr" style="padding-right: 24px;">+91</span></li>
                      <li role="option">英属印度洋领地<span class="fr" style="padding-right: 24px;">+246</span></li>
                      <li role="option">爱尔兰<span class="fr" style="padding-right: 24px;">+353</span></li>
                      <li role="option">伊朗<span class="fr" style="padding-right: 24px;">+98</span></li>
                      <li role="option">伊拉克<span class="fr" style="padding-right: 24px;">+964</span></li>
                      <li role="option">冰岛<span class="fr" style="padding-right: 24px;">+354</span></li>
                      <li role="option">以色列<span class="fr" style="padding-right: 24px;">+972</span></li>
                      <li role="option">意大利<span class="fr" style="padding-right: 24px;">+39</span></li>
                      <li role="option">牙买加<span class="fr" style="padding-right: 24px;">+1876</span></li>
                      <li role="option">约旦<span class="fr" style="padding-right: 24px;">+962</span></li>
                      <li role="option">日本<span class="fr" style="padding-right: 24px;">+81</span></li>
                      <li role="option">哈萨克斯坦<span class="fr" style="padding-right: 24px;">+327</span></li>
                      <li role="option">肯尼亚<span class="fr" style="padding-right: 24px;">+254</span></li>
                      <li role="option">吉尔吉斯斯坦<span class="fr" style="padding-right: 24px;">+331</span></li>
                      <li role="option">柬埔寨<span class="fr" style="padding-right: 24px;">+855</span></li>
                      <li role="option">基里巴斯<span class="fr" style="padding-right: 24px;">+686</span></li>
                      <li role="option">圣基茨和尼维斯<span class="fr" style="padding-right: 24px;">+1869</span></li>
                      <li role="option">韩国<span class="fr" style="padding-right: 24px;">+82</span></li>
                      <li role="option">科索沃<span class="fr" style="padding-right: 24px;">+384</span></li>
                      <li role="option">科威特<span class="fr" style="padding-right: 24px;">+965</span></li>
                      <li role="option">老挝<span class="fr" style="padding-right: 24px;">+856</span></li>
                      <li role="option">黎巴嫩<span class="fr" style="padding-right: 24px;">+961</span></li>
                      <li role="option">利比里亚<span class="fr" style="padding-right: 24px;">+231</span></li>
                      <li role="option">利比亚<span class="fr" style="padding-right: 24px;">+218</span></li>
                      <li role="option">圣卢西亚<span class="fr" style="padding-right: 24px;">+1758</span></li>
                      <li role="option">列支敦士登<span class="fr" style="padding-right: 24px;">+423</span></li>
                      <li role="option">斯里兰卡<span class="fr" style="padding-right: 24px;">+94</span></li>
                      <li role="option">莱索托<span class="fr" style="padding-right: 24px;">+266</span></li>
                      <li role="option">立陶宛<span class="fr" style="padding-right: 24px;">+370</span></li>
                      <li role="option">卢森堡<span class="fr" style="padding-right: 24px;">+352</span></li>
                      <li role="option">拉脱维亚<span class="fr" style="padding-right: 24px;">+371</span></li>
                      <li role="option">法属圣马丁<span class="fr" style="padding-right: 24px;">+1599</span></li>
                      <li role="option">摩洛哥<span class="fr" style="padding-right: 24px;">+212</span></li>
                      <li role="option">摩纳哥<span class="fr" style="padding-right: 24px;">+377</span></li>
                      <li role="option">摩尔多瓦<span class="fr" style="padding-right: 24px;">+373</span></li>
                      <li role="option">马达加斯加<span class="fr" style="padding-right: 24px;">+261</span></li>
                      <li role="option">马尔代夫<span class="fr" style="padding-right: 24px;">+960</span></li>
                      <li role="option">墨西哥<span class="fr" style="padding-right: 24px;">+52</span></li>
                      <li role="option">马绍尔群岛<span class="fr" style="padding-right: 24px;">+692</span></li>
                      <li role="option">马其顿<span class="fr" style="padding-right: 24px;">+389</span></li>
                      <li role="option">马里<span class="fr" style="padding-right: 24px;">+223</span></li>
                      <li role="option">马耳他<span class="fr" style="padding-right: 24px;">+356</span></li>
                      <li role="option">缅甸<span class="fr" style="padding-right: 24px;">+95</span></li>
                      <li role="option">黑山<span class="fr" style="padding-right: 24px;">+382</span></li>
                      <li role="option">蒙古<span class="fr" style="padding-right: 24px;">+976</span></li>
                      <li role="option">北马里亚纳群岛<span class="fr" style="padding-right: 24px;">+1670</span></li>
                      <li role="option">莫桑比克<span class="fr" style="padding-right: 24px;">+258</span></li>
                      <li role="option">毛里塔尼亚<span class="fr" style="padding-right: 24px;">+222</span></li>
                      <li role="option">蒙塞拉特岛<span class="fr" style="padding-right: 24px;">+1664</span></li>
                      <li role="option">毛里求斯<span class="fr" style="padding-right: 24px;">+230</span></li>
                      <li role="option">马拉维<span class="fr" style="padding-right: 24px;">+265</span></li>
                      <li role="option">马来西亚<span class="fr" style="padding-right: 24px;">+60</span></li>
                      <li role="option">纳米比亚<span class="fr" style="padding-right: 24px;">+264</span></li>
                      <li role="option">新喀里多尼亚<span class="fr" style="padding-right: 24px;">+687</span></li>
                      <li role="option">尼日尔<span class="fr" style="padding-right: 24px;">+227</span></li>
                      <li role="option">诺福克岛<span class="fr" style="padding-right: 24px;">+672</span></li>
                      <li role="option">尼日利亚<span class="fr" style="padding-right: 24px;">+234</span></li>
                      <li role="option">尼加拉瓜<span class="fr" style="padding-right: 24px;">+505</span></li>
                      <li role="option">纽埃岛<span class="fr" style="padding-right: 24px;">+683</span></li>
                      <li role="option">荷兰<span class="fr" style="padding-right: 24px;">+31</span></li>
                      <li role="option">挪威<span class="fr" style="padding-right: 24px;">+47</span></li>
                      <li role="option">尼泊尔<span class="fr" style="padding-right: 24px;">+977</span></li>
                      <li role="option">瑙鲁<span class="fr" style="padding-right: 24px;">+674</span></li>
                      <li role="option">新西兰<span class="fr" style="padding-right: 24px;">+64</span></li>
                      <li role="option">阿曼<span class="fr" style="padding-right: 24px;">+968</span></li>
                      <li role="option">巴基斯坦<span class="fr" style="padding-right: 24px;">+92</span></li>
                      <li role="option">巴拿马<span class="fr" style="padding-right: 24px;">+507</span></li>
                      <li role="option">秘鲁<span class="fr" style="padding-right: 24px;">+51</span></li>
                      <li role="option">菲律宾<span class="fr" style="padding-right: 24px;">+63</span></li>
                      <li role="option">帕劳<span class="fr" style="padding-right: 24px;">+680</span></li>
                      <li role="option">巴布亚新几内亚<span class="fr" style="padding-right: 24px;">+675</span></li>
                      <li role="option">波兰<span class="fr" style="padding-right: 24px;">+48</span></li>
                      <li role="option">波多黎各<span class="fr" style="padding-right: 24px;">+1787</span></li>
                      <li role="option">朝鲜<span class="fr" style="padding-right: 24px;">+850</span></li>
                      <li role="option">葡萄牙<span class="fr" style="padding-right: 24px;">+351</span></li>
                      <li role="option">巴拉圭<span class="fr" style="padding-right: 24px;">+595</span></li>
                      <li role="option">巴勒斯坦<span class="fr" style="padding-right: 24px;">+970</span></li>
                      <li role="option">法属波利尼西亚<span class="fr" style="padding-right: 24px;">+689</span></li>
                      <li role="option">卡塔尔<span class="fr" style="padding-right: 24px;">+974</span></li>
                      <li role="option">罗马尼亚<span class="fr" style="padding-right: 24px;">+40</span></li>
                      <li role="option">俄罗斯<span class="fr" style="padding-right: 24px;">+7</span></li>
                      <li role="option">卢旺达<span class="fr" style="padding-right: 24px;">+250</span></li>
                      <li role="option">沙特阿拉伯<span class="fr" style="padding-right: 24px;">+966</span></li>
                      <li role="option">苏丹<span class="fr" style="padding-right: 24px;">+249</span></li>
                      <li role="option">南苏丹<span class="fr" style="padding-right: 24px;">+211</span></li>
                      <li role="option">塞内加尔<span class="fr" style="padding-right: 24px;">+221</span></li>
                      <li role="option">新加坡<span class="fr" style="padding-right: 24px;">+65</span></li>
                      <li role="option">所罗门群岛<span class="fr" style="padding-right: 24px;">+677</span></li>
                      <li role="option">塞拉利昂<span class="fr" style="padding-right: 24px;">+232</span></li>
                      <li role="option">萨尔瓦多<span class="fr" style="padding-right: 24px;">+503</span></li>
                      <li role="option">圣马力诺<span class="fr" style="padding-right: 24px;">+378</span></li>
                      <li role="option">索马里<span class="fr" style="padding-right: 24px;">+252</span></li>
                      <li role="option">圣皮埃尔和密克隆群岛<span class="fr" style="padding-right: 24px;">+508</span></li>
                      <li role="option">塞尔维亚<span class="fr" style="padding-right: 24px;">+381</span></li>
                      <li role="option">圣多美和普林西比<span class="fr" style="padding-right: 24px;">+239</span></li>
                      <li role="option">苏里南<span class="fr" style="padding-right: 24px;">+597</span></li>
                      <li role="option">斯洛伐克<span class="fr" style="padding-right: 24px;">+421</span></li>
                      <li role="option">斯洛文尼亚<span class="fr" style="padding-right: 24px;">+386</span></li>
                      <li role="option">瑞典<span class="fr" style="padding-right: 24px;">+46</span></li>
                      <li role="option">斯威士兰<span class="fr" style="padding-right: 24px;">+268</span></li>
                      <li role="option">荷属圣马丁<span class="fr" style="padding-right: 24px;">+1721</span></li>
                      <li role="option">塞舌尔<span class="fr" style="padding-right: 24px;">+248</span></li>
                      <li role="option">叙利亚<span class="fr" style="padding-right: 24px;">+963</span></li>
                      <li role="option">特克斯和凯科斯群岛<span class="fr" style="padding-right: 24px;">+1649</span></li>
                      <li role="option">乍得<span class="fr" style="padding-right: 24px;">+235</span></li>
                      <li role="option">多哥<span class="fr" style="padding-right: 24px;">+228</span></li>
                      <li role="option">泰国<span class="fr" style="padding-right: 24px;">+66</span></li>
                      <li role="option">塔吉克斯坦<span class="fr" style="padding-right: 24px;">+992</span></li>
                      <li role="option">土库曼斯坦<span class="fr" style="padding-right: 24px;">+993</span></li>
                      <li role="option">东帝汶<span class="fr" style="padding-right: 24px;">+670</span></li>
                      <li role="option">汤加<span class="fr" style="padding-right: 24px;">+676</span></li>
                      <li role="option">特立尼达和多巴哥<span class="fr" style="padding-right: 24px;">+1868</span></li>
                      <li role="option">突尼斯<span class="fr" style="padding-right: 24px;">+216</span></li>
                      <li role="option">土耳其<span class="fr" style="padding-right: 24px;">+90</span></li>
                      <li role="option">图瓦卢<span class="fr" style="padding-right: 24px;">+688</span></li>
                      <li role="option">坦桑尼亚<span class="fr" style="padding-right: 24px;">+255</span></li>
                      <li role="option">乌干达<span class="fr" style="padding-right: 24px;">+256</span></li>
                      <li role="option">乌克兰<span class="fr" style="padding-right: 24px;">+380</span></li>
                      <li role="option">乌拉圭<span class="fr" style="padding-right: 24px;">+598</span></li>
                      <li role="option">乌兹别克斯坦<span class="fr" style="padding-right: 24px;">+233</span></li>
                      <li role="option">梵蒂冈<span class="fr" style="padding-right: 24px;">+39</span></li>
                      <li role="option">圣文森特和格林纳丁斯<span class="fr" style="padding-right: 24px;">+1784</span></li>
                      <li role="option">委内瑞拉<span class="fr" style="padding-right: 24px;">+58</span></li>
                      <li role="option">英属维尔京群岛<span class="fr" style="padding-right: 24px;">+1284</span></li>
                      <li role="option">美属维尔京群岛<span class="fr" style="padding-right: 24px;">+1340</span></li>
                      <li role="option">越南<span class="fr" style="padding-right: 24px;">+84</span></li>
                      <li role="option">瓦努阿图<span class="fr" style="padding-right: 24px;">+678</span></li>
                      <li role="option">瓦利斯和富图纳群岛<span class="fr" style="padding-right: 24px;">+681</span></li>
                      <li role="option">萨摩亚<span class="fr" style="padding-right: 24px;">+685</span></li>
                      <li role="option">也门<span class="fr" style="padding-right: 24px;">+967</span></li>
                      <li role="option">南非<span class="fr" style="padding-right: 24px;">+27</span></li>
                      <li role="option">赞比亚<span class="fr" style="padding-right: 24px;">+260</span></li>
                      <li role="option">津巴布韦<span class="fr" style="padding-right: 24px;">+263</span></li>
                      <li role="option">亚什摩及卡地尔群岛<span class="fr" style="padding-right: 24px;">+61</span></li>
                      <li role="option">法属南部领土<span class="fr" style="padding-right: 24px;">+262</span></li>
                      <li role="option">克利珀顿岛<span class="fr" style="padding-right: 24px;">+262</span></li>
                      <li role="option">塞浦路斯联合国缓冲区<span class="fr" style="padding-right: 24px;">+357</span></li>
                      <li role="option">珊瑚海群岛<span class="fr" style="padding-right: 24px;">+43</span></li>
                      <li role="option">德凯利亚<span class="fr" style="padding-right: 24px;">+44</span></li>
                      <li role="option">赫德岛和麦克唐纳岛<span class="fr" style="padding-right: 24px;">+672</span></li>
                      <li role="option">印度洋领地<span class="fr" style="padding-right: 24px;">+246</span></li>
                      <li role="option">拜科努尔<span class="fr" style="padding-right: 24px;">+77</span></li>
                      <li role="option">皮特克恩岛<span class="fr" style="padding-right: 24px;">+1</span></li>
                      <li role="option">南沙群岛<span class="fr" style="padding-right: 24px;">+86</span></li>
                      <li role="option">西撒哈拉<span class="fr" style="padding-right: 24px;">+212</span></li>
                      <li role="option">南乔治亚岛和南桑德韦奇岛<span class="fr" style="padding-right: 24px;">+1</span></li>
                      <li role="option">圣赫勒拿<span class="fr" style="padding-right: 24px;">+1</span></li>
                      <li role="option">索马里兰<span class="fr" style="padding-right: 24px;">+252</span></li>
                      <li role="option">美国本土外小岛屿<span class="fr" style="padding-right: 24px;">+1</span></li>
                      <li role="option">关塔那摩湾<span class="fr" style="padding-right: 24px;">+1</span></li>
                      <li role="option">阿克罗蒂里<span class="fr" style="padding-right: 24px;">+357</span></li>
                    </ul>
                  </div>
                </div><label class="error-tip">请输入手机号</label>
              </div>
              <div class="login-pop__form-item "><input name="accountPWD" id="accountPWD" type="password"
                  role="password" placeholder="密码" autocomplete="current-password" value=""></div>
              <div class="login-pop__form-item "><button type="button" class="login-btn">登录</button></div>
            </form>
            <div class="third-part__title">
              <p>第三方账号登录</p>
            </div>
            <div class="third-part__list"><a class="third-part__link"><i
                  class="xuicon xuicon-denglu-weixin third-part-icon"></i></a><a class="third-part__link"><i
                  class="xuicon xuicon-denglu-QQ third-part-icon"></i></a><a class="third-part__link"><i
                  class="xuicon xuicon-share_sina third-part-icon"></i></a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-pop__footer"></div>
  </div>




</div></template>

<script lang="ts">
export default {
  name: 'Login',
}
</script>

<style lang="less" scoped>.body {
  width: 100%;
  height: 100%;
}

.loginPage {

  padding-top: 30px;

  .title-Picture {

    // height:200px;
    //   width:200px;
    .image {
      display: block;
      /* 让图像成为块元素 */
      margin-left: auto;
      /* 左边外边距自动调整到最大值 */
      margin-right: auto;
      /* 右边外边距自动调整到最大值 */
      height: 120px;
      width: 250px;
      // border: 1px solid red;
      backdrop-filter: 20px 20px;
    }

  }

}</style>