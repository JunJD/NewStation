var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useState } from 'react';
import './styles/index.scss';
import Button, { ButtonSize, ButtonType, animationType } from './components/Buttons/Button';
import Alert, { AlertType } from './components/Alerts/Alert';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/subMenu';
import Tabs from './components/Tabs/Tabs';
import TabItem from './components/Tabs/TabItem';
import Icon, { ThemeProps } from './components/Icon/Icon';
import Input from './components/Input/Input';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Select, { Mode } from './components/Select/Select';
import Option from './components/Select/Option';
import UpLoad, { UpLoadFileStatus } from './components/UpLoad/UpLoad';
var App = function () {
    var _a = __read(useState(false), 2), alertVisible = _a[0], setAlertVisible = _a[1];
    var data = [
        { value: "扬尼斯·阿德托昆博", age: 18 },
        { value: "卢卡·东契奇", age: 18 },
        { value: "乔尔·恩比德", age: 18 },
        { value: "尼古拉·约基奇", age: 18 },
        { value: "帕斯卡尔·西亚卡姆", age: 18 },
        { value: "克里斯塔普斯·波尔津吉斯", age: 18 },
        { value: "艾尔·霍福德", age: 18 },
        { value: "尼古拉·武切维奇", age: 18 },
        { value: "鲁迪·戈贝尔", age: 18 },
        { value: "本·西蒙斯", age: 18 },
    ]; //是否可以请求异步数据?
    var handleFetch = function (query) {
        return fetch("https://api.github.com/search/users?q=".concat(query))
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var items = _a.items;
            return items === null || items === void 0 ? void 0 : items.slice(0, 10).map(function (item) { return (__assign({ value: item.login }, item)); });
        });
    };
    // const renderOption= (item:any)=>{
    //     if(item){
    //         return (
    //             <>
    //             <span>Name:{item.value}</span>
    //             <span>age:{item.age}</span>
    //             </>
    //         )
    //     }
    // }
    var defaultFileList = [
        { uid: '123', size: 1234, name: 'hello.md', status: UpLoadFileStatus.Uploading, percent: 60 },
        { uid: '122', size: 1234, name: 'xyz.md', status: UpLoadFileStatus.Error, percent: 30 },
        { uid: '121', size: 1234, name: 'eyiha.md', status: UpLoadFileStatus.Success, percent: 30 }
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("h4", null, "Tabs\u638C\u63A7\u5168\u5C40"),
        React.createElement(Tabs
        // tabsType={TabsType.CardType}
        , null,
            React.createElement(TabItem, { label: 'UpLoad测试区' },
                React.createElement(UpLoad, { name: 'filename', data: { 'key': 'value' }, 
                    //  headers={{'X-Powered-By':'newstation'}}
                    style: { width: '500px' }, defaultFileList: defaultFileList, multiple: true, action: "http://127.0.0.1:8000", beforeUpload: function (f) {
                        if ((f.size / 1024) > 135000) {
                            console.log("\u6587\u4EF6\u592A\u5927\u4E86\uFF0C".concat(f.size / 1024, "Kb"));
                            return false;
                        }
                        return true;
                    }, onSuccess: function (r, f) { console.log("".concat(f.name, "\u4E0A\u4F20\u6210\u529F")); }, onProgress: function (p, f) { console.log(p); }, drag: true },
                    React.createElement(Icon, { icon: "upload", size: "5x", theme: ThemeProps.Primary }),
                    React.createElement("br", null),
                    React.createElement("p", null, "Drag file over to upload"))),
            React.createElement(TabItem, { label: 'Select测试区' },
                React.createElement(Select, { placeholder: 'Pick a Chinese Kungfu', mode: Mode.Tags },
                    React.createElement(Option, { title: '\u964D\u9F99\u5341\u516B\u638C', disabled: true }),
                    React.createElement(Option, { title: '\u4E5D\u9633\u6B63\u7ECF' }),
                    React.createElement(Option, { title: '\u5438\u529F\u5927\u6CD5' }),
                    React.createElement(Option, { title: '\u7384\u51A5\u638C' }),
                    React.createElement(Option, { title: '\u964D\u9F99\u5341\u516B\u638C', disabled: true }),
                    React.createElement(Option, { title: '\u4E5D\u9633\u6B63\u7ECF' }),
                    React.createElement(Option, { title: '\u5438\u529F\u5927\u6CD5' }),
                    React.createElement(Option, { title: '\u7384\u51A5\u638C' }),
                    React.createElement(Option, { title: '\u964D\u9F99\u5341\u516B\u638C', disabled: true }),
                    React.createElement(Option, { title: '\u4E5D\u9633\u6B63\u7ECF' }),
                    React.createElement(Option, { title: '\u5438\u529F\u5927\u6CD5' }),
                    React.createElement(Option, { title: '\u7384\u51A5\u638C' }))),
            React.createElement(TabItem, { label: 'Autocomplete测试区' },
                React.createElement("label", null, "github\u67E5\u8BE2"),
                React.createElement(Autocomplete
                // renderOption={renderOption}
                , { 
                    // renderOption={renderOption}
                    fetchSuggestions: handleFetch, data: data, placeholder: '\u8BF7\u8F93\u5165', size: "lg" /* InputSize.Lg */ })),
            React.createElement(TabItem, { label: 'Input测试区' },
                React.createElement(Input, { onChange: function (e) { console.log(e.target.value); }, placeholder: '\u8BF7\u8F93\u5165', size: "lg" /* InputSize.Lg */ }),
                React.createElement(Input, { placeholder: '\u8BF7\u8F93\u5165', size: "sm" /* InputSize.Sm */, icon: "calendar-plus" /* IconCustom.Calendar */ }),
                React.createElement(Input, { placeholder: '\u8BF7\u767B\u5F55...', size: "sm" /* InputSize.Sm */, icon: "right-to-bracket" /* IconCustom.Login */ }),
                React.createElement(Input, { prepand: 'http://', placeholder: '\u8BF7\u8F93\u5165', size: "sm" /* InputSize.Sm */ }),
                React.createElement(Input, { placeholder: 'disabled', disabled: true }),
                React.createElement(Input, { append: '.com' })),
            React.createElement(TabItem, { label: 'Button测试区' },
                React.createElement("div", null,
                    React.createElement(Button, null, "Default"),
                    React.createElement("hr", null),
                    React.createElement("h4", null, "size"),
                    React.createElement(Button, { size: ButtonSize.Sm }, "sizeSm"),
                    React.createElement(Button, { size: ButtonSize.Lg }, "sizeLg"),
                    React.createElement("hr", null),
                    React.createElement("h4", null, "animation"),
                    React.createElement(Button, { btnType: ButtonType.Primary, animation: animationType.Default }, "animation-default"),
                    React.createElement("hr", null),
                    React.createElement("h4", null, "type"),
                    React.createElement(Button, { btnType: ButtonType.Primary }, "Primary"),
                    React.createElement(Button, { btnType: ButtonType.Info }, "\u5F85\u914D\u7F6E\u7C7B\u578B"),
                    React.createElement(Button, { btnType: ButtonType.Danger }, "Danger"),
                    React.createElement(Button, { disabled: true }, "Disable"),
                    React.createElement(Button, { btnType: ButtonType.Link, herf: 'http://www.dingjunjie.com' }, "Link"),
                    React.createElement("hr", null),
                    React.createElement("h4", null, "disabled"),
                    React.createElement(Button, { disabled: true }, "disabledbutton"),
                    React.createElement(Button, { disabled: true, btnType: ButtonType.Link, herf: 'http://www.dingjunjie.com' }, "disabledLink"))),
            React.createElement(TabItem, { label: 'Alert测试区' },
                React.createElement(Button, { onClick: function () { setAlertVisible(alertVisible = true); } }, "\u70B9\u51FBalert"),
                React.createElement(Alert, { visible: alertVisible, onClose: function () { setAlertVisible(alertVisible = false); }, alertType: AlertType.Success, description: '\u6210\u529F\u6837\u5F0F\u63D0\u793A' })),
            React.createElement(TabItem, { index: '2', label: 'Icon测试区' },
                React.createElement("hr", null),
                React.createElement(Icon, { theme: ThemeProps.Primary, icon: "anchor-circle-check", size: "6x" }),
                React.createElement("hr", null),
                React.createElement(Icon, { theme: ThemeProps.Secondary, icon: "arrow-down", size: "6x" })),
            React.createElement(TabItem, { label: 'Menu测试区' },
                React.createElement(Menu, { defaultIndex: 1, 
                    // mode='vertical'
                    onSelect: function (index) { console.log(index); }, defaultOpenSubMenu: ['2'] },
                    React.createElement(MenuItem, null, "\u4E00\u7EA7\u6807\u98981"),
                    React.createElement(MenuItem, null, "\u4E00\u7EA7\u6807\u98982"),
                    React.createElement(SubMenu, { title: '\u4E00\u7EA7\u6807\u98983' },
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98981"),
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98982"),
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98983"),
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98984")),
                    React.createElement(SubMenu, { title: '\u4E00\u7EA7\u6807\u98984' },
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98985"),
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98986"),
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98987"),
                        React.createElement(MenuItem, null, "\u4E8C\u7EA7\u6807\u98988")))))));
};
export default App;
