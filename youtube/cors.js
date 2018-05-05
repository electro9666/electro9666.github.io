        function doCORSRequest(options, printResult) {
            console.log("cors start");
            var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

            var x = new XMLHttpRequest();
            x.open(options.method, cors_api_url + options.url);
            x.onload = x.onerror = function() {
                printResult(
                    //options.method + ' ' + options.url + '\n' + x.status + ' ' + x.statusText + '\n\n' + (x.responseText || '')
                    (x.responseText || '')
                );
            };
            if (/^POST/i.test(options.method)) {
                x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            x.send(options.data);
        }
        
        function parseHTML(htmlString){
            console.log("parseHTML start");
            var el = document.createElement('html');
            // el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0'>test01</a><a href='test1'>test02</a><a href='test2'>test03</a></body></html>";
            el.innerHTML = htmlString;
            var p = el.getElementsByTagName("script");

            var scriptString = p[p.length-3].innerHTML;
//            var obj = JSON.parse(scriptString);
//            console.log(obj);
            
            var script = document.createElement('script');
            script.innerHTML = scriptString;
            document.getElementsByTagName('head')[0].appendChild(script);
            
            var videoId = window.ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelVideoPlayerRenderer.readMoreText.runs[0].navigationEndpoint.watchEndpoint.videoId;
            console.log(videoId);
            return videoId;
        }

        function getJtbcVideoId(num){
            doCORSRequest({
                method: 'GET',
                url: 'https://www.youtube.com/user/JTBC10news/featured',
                data: ''
            }, function printResult(result) {
                //outputField.value = result;
                console.log("parse");
                var videoId = parseHTML(result);
                
                $("input").eq(num).val(videoId).change();
            });                    
        }