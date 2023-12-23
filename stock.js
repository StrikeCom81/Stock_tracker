new TradingView.widget(
    {
        "autosize": true,
        "symbol": "NASDAQ:ADP",
        "interval": "240",
        "timezone": "Etc/Utc",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "watchlist": [
            "NASDAQ:ADP",
            "NYSE:NOC",
            "NASDAQ:IBKR",
            "FRA:SAP",
            "FRA:RHM"
        ],
        "details": true,
        "hotlist": true,
        "calendar": true,
        "studies": [
            "STD;SMA"
        ],
        "container_id": "chart",
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650"
    }
);
