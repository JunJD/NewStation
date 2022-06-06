import {useEffect,RefObject} from 'react'
function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
    useEffect(() => {
      const listener = (event: MouseEvent) => {
        if (ref.current?.contains(event.target as HTMLElement)) {
          return  //点击到选中的ref直接return
        }
        handler(event)
      }
      document.addEventListener('click', listener)
      return () => {
        document.removeEventListener('click', listener) //处理函数
      }
    }, [ref, handler])
  }
  
  export default useClickOutside