// JavaScript Document

		function randomImg() {  <!-- функция для раскладки карт случайным образом -->
			var imgAr = ['<a href=""><img src="Test/Cards/1.png" id="1" data-tid="Card" class="disabled"/></a>',  <!-- массив из карт -->
				'<a href=""><img src="Test/Cards/2.png" id="2" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/3.png" id="3" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/4.png" id="4" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/5.png" id="5" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/6.png" id="6" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/7.png" id="7" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/8.png" id="8" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/9.png" id="9" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/10.png" id="10" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/11.png" id="11" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/12.png" id="12" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/13.png" id="13" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/14.png" id="14" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/15.png" id="15" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/16.png" id="16" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/17.png" id="17" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/18.png" id="18" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/19.png" id="19" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/20.png" id="20" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/21.png" id="21" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/22.png" id="22" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/23.png" id="23" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/24.png" id="24" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/25.png" id="25" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/26.png" id="26" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/27.png" id="27" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/28.png" id="28" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/29.png" id="29" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/30.png" id="30" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/31.png" id="31" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/32.png" id="32" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/33.png" id="33" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/34.png" id="34" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/35.png" id="35" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/36.png" id="36" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/37.png" id="37" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/38.png" id="38" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/39.png" id="39" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/40.png" id="40" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/41.png" id="41" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/42.png" id="42" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/43.png" id="43" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/44.png" id="44" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/45.png" id="45" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/46.png" id="46" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/47.png" id="47" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/48.png" id="48" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/49.png" id="49" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/50.png" id="50" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/51.png" id="51" data-tid="Card" class="disabled"/></a>',
				'<a href=""><img src="Test/Cards/52.png" id="52" data-tid="Card" class="disabled"/></a>'];
			var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
			var arr2 = [];
			for (i = 0; i < 9; i++) { <!-- цикл для массива случайно выпавших попарных карт -->
				var rndd = Math.floor(Math.random() * arr1.length);
				if (arr2.indexOf(arr1[rndd]) === -1) {
					arr2.push(arr1[rndd]);
					arr2.push(arr1[rndd]);
				}
				else {
					i--;
				}
			}
			for (var i = 0; arr2.length > 0; i++) { <!-- еще раз сортируем массив, чтобы карты распределялись  не попарно -->
				var rnd = Math.floor(Math.random() * arr2.length);
				var rndImg = imgAr[arr2[rnd]];
				var imgTag = document.querySelectorAll('td.cards');
				imgTag[i].innerHTML = rndImg;
				arr2.splice(rnd, 1);
			}
		}
		window.onload = randomImg;

		
		setTimeout(function () {
			elIMG = document.getElementsByTagName('img');
			for (i = 0; i < elIMG.length; i++) {
				elIMG[i].removeAttribute('disabled');
				elIMG[i].setAttribute('class', 'Hide');
			}
		}
			, 5000);
		function getTarget(e) {    <!-- получаем событие -->
			if (!e) {
				e = window.event;
			}
			return e.target || e.srcElement;
		}

		var element = []; <!-- массив для id вытянутых карт -->
		var scope = 0; <!-- счет -->
		var para = 0; <!-- количество отгаданых пар -->
		function itemDon(e) {
			var target;           <!-- цель события -->
			target = getTarget(e);

			if (e.preventDefault) {   <!-- отменяем действие по умолчанию -->
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			var attr = target.getAttribute('class');<!-- чтобы нельзя было кликать по одной и той же карте 2 раза подряд -->

			if (attr == 'Visibble') {
				target.className = 'Visibble';
			}

			else {

				if (e.preventDefault) {     <!-- отменяем действие по умолчанию -->
					e.preventDefault();
				} else {
					e.returnValue = false;
				}
				
				
				var elem = target.getAttribute('id');<!-- создаем список с id вытянутых карт -->
				element.push(elem);
				var Array = document.querySelectorAll('img.Visibble');
				{
				if (Array.length <2){
					target.className = 'Visibble';
				}
					Array = document.querySelectorAll('img.Visibble');
					setTimeout(function () {
						
						if (element.length >1) {<!-- сравниваем id вытянутых карт -->
							var first = element[0];
							var second = element[1];
							var Perv = Array[0];
							var Vtor = Array[1];

							if (first !== second) {<!-- если не совпали -->

								Vtor.className = 'Hide';
								Perv.className = 'Hide';
								scope = scope - (para / 2) * 42;
								
							} else {<!-- если совпали -->
								Vtor.className = 'tucked';
								Perv.className = 'tucked';
								Perv.parentNode.className = 'Clicked';
								Vtor.parentNode.className = 'Clicked';

								ert = document.getElementsByClassName('tucked');
								para = ert.length;
								scope = scope + (18 - para) * 42;<!-- корректируем счет -->

							}


							var itogo = '<p>Очки: ' + scope + '</p>';
							var eel = document.getElementById('TOTAL');
							eel.innerHTML = scope;

							element.length = 0;<!-- сбрасываем счетчик -->
						} if (para == 18)<!-- условие конца игры -->
							
							window.location.href = "page-1-end-page.html?count=" + scope;
					}, 1000);

				}
			}
		}

		var el = document.getElementById('container');
		if (el.addEventListener) {                    <!-- создаем слушатель события -->
			el.addEventListener('click', function (e) {
				itemDon(e);
			}, false);

		} else {
			el.attachEvent('onclick', function (e) {
				itemDon(e);
			});

		}

