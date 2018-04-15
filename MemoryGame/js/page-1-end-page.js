// JavaScript Document

	<script type="text/javascript">
		
		function getParameterByName(name, url) {
			if (!url) url = window.location.href;
			name = name.replace(/[\[\]]/g, "\\$&");
			var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
			if (!results) return null;
			if (!results[2]) return '';
			return decodeURIComponent(results[2].replace(/\+/g, " "));
		}
		// Выделяем элемент и сохраняем его в переменной.
		// var el = document.location = "page-1-game-page.html?id=" + document.getElementById("TOTAL").value;
		// ЧЧЧЧЧ:
		var el = getParameterByName('count');
		var eeeel = document.getElementById('scriptR');
		eeeel.innerHTML = el;
	</script>

