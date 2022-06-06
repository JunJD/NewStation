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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useState } from 'react';
import axios from 'axios';
import UploadList from './UploadList';
import Dragger from '../Progress/dragger';
import './_style.scss';
export var UpLoadFileStatus;
(function (UpLoadFileStatus) {
    UpLoadFileStatus["Ready"] = "ready";
    UpLoadFileStatus["Uploading"] = "uploading";
    UpLoadFileStatus["Success"] = "success";
    UpLoadFileStatus["Error"] = "error";
})(UpLoadFileStatus || (UpLoadFileStatus = {}));
var UpLoad = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, beforeUpload = props.beforeUpload, onChange = props.onChange, onRemove = props.onRemove, data = props.data, headers = props.headers, name = props.name, withCredentials = props.withCredentials, multiple = props.multiple, style = props.style, children = props.children, drag = props.drag;
    /*
    *useState
     */
    var _a = __read(useState(defaultFileList || []), 2), fileList = _a[0], setFileList = _a[1];
    /*
    *useRef
     */
    var InputRef = useRef(null);
    /*
    *进度条UI更新数据层面--更新逻辑
     */
    var updateFileList = function (_file, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (_file.uid === file.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + 'uploadi-file',
            status: UpLoadFileStatus.Ready,
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file,
        };
        // setFileList([_file,...fileList])
        setFileList(function (prevList) {
            return __spreadArray([_file], __read(prevList), false);
        });
        var formData = new FormData();
        formData.append(name || file.name, file);
        if (data) {
            /*
            *把data对象的属性转成数组遍历
             */
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        // for (var value of formData.values()) {
        //     console.log(value);
        //     } //后端查看formdata数据的方式
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            /*
            *上传进度api
             */
            onUploadProgress: function (e) {
                var percentage = Math.floor(e.loaded / e.total * 100);
                if ((percentage < 100)) {
                    updateFileList(_file, { status: UpLoadFileStatus.Uploading, percent: percentage });
                    if (onProgress) {
                        onProgress(percentage, file); //钩子=>传输中...
                    }
                }
            }
        }).then(function (resolve) {
            updateFileList(_file, { status: UpLoadFileStatus.Success, response: resolve.data, percent: 100 });
            if (onSuccess) {
                onSuccess(resolve, file); //钩子=>传输成功...
            }
            else {
                if (onChange) {
                    onChange(file);
                }
            }
        }).catch(function (err) {
            updateFileList(_file, { status: UpLoadFileStatus.Error, error: err });
            if (onError) {
                onError(err, file); //钩子=>传输失败...
            }
            else {
                if (onChange) {
                    onChange(file);
                }
            }
        });
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        // if (fileInput.current) {
        //   fileInput.current.value = ''
        // }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        console.log(postFiles);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result instanceof Promise) {
                    result.then(function (res) {
                        post(res);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var handleClick = function () {
        var _a;
        (_a = InputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) {
                if (onRemove) {
                    onRemove(item);
                }
                return file.uid !== item.uid;
            });
        });
    };
    return (React.createElement("div", { style: style },
        React.createElement("div", { onClick: handleClick }, drag ?
            React.createElement(Dragger, { onFile: function (files) { uploadFiles(files); } }, children) :
            children),
        React.createElement("input", { multiple: multiple, onChange: handleFileChange, ref: InputRef, style: { display: 'none' }, type: "file" }),
        React.createElement(UploadList, { fileList: fileList, onRemove: handleRemove })));
};
UpLoad.defaultProps = {
    name: 'file'
};
export default UpLoad;
