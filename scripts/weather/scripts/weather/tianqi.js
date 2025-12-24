name: Weather - 今日天气
desc: 霓虹蓝主题天气展示模块（支持城市代码，可自定义）
version: 1.0.0
author: Shaw
category: Weather
icon: sun.max.fill
color: '#0ff0fc'   # 霓虹蓝主题色

tiles:
  - name: 今日天气
    icon: sun.max.fill
    backgroundColor: '#1a1a1a'
    argument: cityId=101110101
    script: tianqi

script-providers:
  tianqi:
    url: https://raw.githubusercontent.com/sanjiej/stash-/main/scripts/weather/tianqi.js
    interval: 600
    timeout: 10
