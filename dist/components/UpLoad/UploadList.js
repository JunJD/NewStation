import React from 'react';
import { UpLoadFileStatus } from './UpLoad';
import Icon, { ThemeProps } from '../Icon/Icon';
import Progress from '../Progress/Progress';
import './_style.scss';
export var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (React.createElement("ul", { className: 'newStation-upload-list' }, fileList === null || fileList === void 0 ? void 0 : fileList.map(function (item) {
        return (React.createElement("li", { className: "newStation-upload-list-item", key: item.uid },
            React.createElement("span", { className: "file-name file-name-".concat(item.status) },
                React.createElement(Icon, { icon: 'file-alt', theme: ThemeProps.Secondary }),
                item.name),
            React.createElement("span", { className: "file-status" },
                (item.status === UpLoadFileStatus.Uploading || item.status === UpLoadFileStatus.Ready) && React.createElement(Icon, { icon: "spinner", spin: true, theme: ThemeProps.Primary }),
                item.status === UpLoadFileStatus.Success && React.createElement(Icon, { icon: "check-circle", theme: ThemeProps.Success }),
                item.status === UpLoadFileStatus.Error && React.createElement(Icon, { icon: "times-circle", theme: ThemeProps.Danger })),
            React.createElement("span", { className: 'file-actions' },
                React.createElement(Icon, { icon: 'times', onClick: function () { onRemove && onRemove(item); } })),
            item.status === UpLoadFileStatus.Ready && React.createElement(Progress, { percent: 0 }),
            item.status === UpLoadFileStatus.Uploading && React.createElement(Progress, { percent: item.percent, strokeHeight: 10 })));
    })));
};
export default UploadList;
