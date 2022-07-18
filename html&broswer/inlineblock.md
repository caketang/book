# 同源页面通信 

1. broadcast channel 
```JS
// BroadcastChannel
(function () {
    const bc = new BroadcastChannel('AlienZHOU');
    const $container = document.getElementById('broadcast-channel');
    const $input = $container.querySelector('input');
    const $btn = $container.querySelector('button');
    const $info = $container.querySelector('p');
    bc.onmessage = function (e) {
        const data = e.data;
        const text = '[receive] ' + data.msg + ' —— tab ' + data.from;
        console.log('[BroadcastChannel] receive message:', text);
        $info.textContent = text;
    };
    bc.onmessageerror = function (e) {
        console.log(e);
    };

    $btn.addEventListener('click', function () {
        const tab = document.getElementById('js-header').dataset.tab;
        const val = $input.value;
        $input.value = '';
        $info.textContent = '[send] ' + val;
        bc.postMessage({
            from: tab,
            msg: val
        });
    });
})();

```

2. service work

```JS


```

3. localStroage
   主要通过监听storage事件


4. Shared Worker
  无法主动通知所有页面 需要轮询

5. IndexedDB
  
6. window.open + window.opener


广播模式：Broadcast Channe / Service Worker / LocalStorage + StorageEvent
共享存储模式：Shared Worker / IndexedDB / cookie
口口相传模式：window.open + window.opener
基于服务端：Websocket / Comet / SSE 等


非同源的则用  iframe