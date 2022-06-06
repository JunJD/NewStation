import { useEffect } from 'react';
function useClickOutside(ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            var _a;
            if ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) {
                return; //点击到选中的ref直接return
            }
            handler(event);
        };
        document.addEventListener('click', listener);
        return function () {
            document.removeEventListener('click', listener); //处理函数
        };
    }, [ref, handler]);
}
export default useClickOutside;
