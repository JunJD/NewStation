import React, { useState} from 'react';
import './styles/index.scss'

import Button,{ButtonSize,ButtonType,animationType} from './components/Buttons/Button'
import Alert,{AlertType} from './components/Alerts/Alert';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/subMenu';

import Tabs from './components/Tabs/Tabs'
import TabItem from './components/Tabs/TabItem';
import Icon,{ThemeProps} from './components/Icon/Icon';
import Input,{IconCustom, InputSize} from './components/Input/Input';
import Autocomplete from './components/Autocomplete/Autocomplete';
import Select,{Mode} from './components/Select/Select';
import Option from './components/Select/Option';
import UpLoad,{UpLoadFileStatus} from './components/UpLoad/UpLoad';
export interface ISourceProps{
    value:string,
    age:number
}
const App:React.FC=()=>{
    
    let [alertVisible,setAlertVisible]=useState<boolean>(false)

    const data=[ 
        {value:"扬尼斯·阿德托昆博",age:18},
        {value:"卢卡·东契奇",age:18},
        {value:"乔尔·恩比德",age:18},
        {value:"尼古拉·约基奇",age:18},
        {value:"帕斯卡尔·西亚卡姆",age:18},
        {value:"克里斯塔普斯·波尔津吉斯",age:18},
        {value:"艾尔·霍福德",age:18},
        {value:"尼古拉·武切维奇",age:18}, 
        {value:"鲁迪·戈贝尔",age:18},
       {value:"本·西蒙斯",age:18},
    ] //是否可以请求异步数据?
    const handleFetch = (query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
          .then(res => res.json())
          .then(({ items }) => {    
            return items?.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
          })
      }
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

    const defaultFileList: any = [
        { uid: '123', size: 1234, name: 'hello.md', status: UpLoadFileStatus.Uploading, percent: 60},
        { uid: '122', size: 1234, name: 'xyz.md', status: UpLoadFileStatus.Error, percent: 30 },
        { uid: '121', size: 1234, name: 'eyiha.md', status: UpLoadFileStatus.Success, percent: 30 }
      ]
    
    
    return(
        <>
        <h4>
            Tabs掌控全局
        </h4>
        <Tabs 
            // tabsType={TabsType.CardType}
        >   

             <TabItem 
             label={'UpLoad测试区'}>
             <UpLoad
             name='filename'
             data={{'key':'value'}}
            //  headers={{'X-Powered-By':'newstation'}}
             style={{width:'500px'}}
             defaultFileList={defaultFileList}
             multiple
             action="http://127.0.0.1:8000"
             beforeUpload={(f)=>{
                 if((f.size / 1024) > 135000){
                     console.log(`文件太大了，${f.size / 1024}Kb`)
                     return false
                 }
                 return true
             }}
             onSuccess={(r,f)=>{console.log(`${f.name}上传成功`);}}
             onProgress={(p,f)=>{console.log(p);}}
             drag
             >
               <Icon icon="upload" size="5x" theme={ThemeProps.Primary} />
                <br/>
                <p>Drag file over to upload</p>
             </UpLoad>
             </TabItem>
             <TabItem label={'Select测试区'}> 
                <Select placeholder='Pick a Chinese Kungfu' mode={Mode.Tags}>
                    <Option title='降龙十八掌' disabled/>
                    <Option title='九阳正经' />
                    <Option title='吸功大法'/>
                    <Option title='玄冥掌' />
                    <Option title='降龙十八掌' disabled/>
                    <Option title='九阳正经' />
                    <Option title='吸功大法'/>
                    <Option title='玄冥掌' />
                    <Option title='降龙十八掌' disabled/>
                    <Option title='九阳正经' />
                    <Option title='吸功大法'/>
                    <Option title='玄冥掌' />
                </Select>
            </TabItem>
            <TabItem label={'Autocomplete测试区'}> 
                <label>github查询</label>
                <Autocomplete
                // renderOption={renderOption}
                fetchSuggestions={handleFetch}
                data={data}
                placeholder='请输入'
                size={InputSize.Lg}
                />
            </TabItem>

            <TabItem label={'Input测试区'}>
                <Input
                onChange={(e)=>{console.log(e.target.value)}}
                placeholder='请输入'
                size={InputSize.Lg}
                />
                <Input
                placeholder='请输入' 
                size={InputSize.Sm}
                icon={IconCustom.Calendar}
                />
                <Input
                placeholder='请登录...'
                size={InputSize.Sm}
                icon={IconCustom.Login}
                />
                <Input
                prepand='http://'
                placeholder='请输入' 
                size={InputSize.Sm}
                />
                 <Input
                placeholder='disabled' 
                disabled
                />
                <Input
                 append='.com'
                />
            </TabItem>
            <TabItem label={'Button测试区'}>
            <div>
            <Button>
                Default
            </Button>
            <hr />
            <h4>size</h4>
            <Button
            size={ButtonSize.Sm}
            >
                sizeSm
            </Button>
            <Button
            size={ButtonSize.Lg}
            >
                sizeLg
            </Button>
            <hr />
            <h4>animation</h4>
            <Button
            btnType={ButtonType.Primary}
            animation={animationType.Default}
            >
                animation-default
            </Button>
            <hr />
            <h4>type</h4>
            <Button
            btnType={ButtonType.Primary}
            >
                Primary
            </Button>
            <Button
            btnType={ButtonType.Info}
            >
                待配置类型
            </Button>
            <Button
            btnType={ButtonType.Danger}
            >
                Danger
            </Button>
            <Button
            disabled
            >
            Disable
            </Button>
            <Button
            btnType={ButtonType.Link}
            herf='http://www.dingjunjie.com'
            >
                Link
            </Button>
            <hr />
            <h4>disabled</h4>
            <Button
            disabled
            >
                 disabledbutton
            </Button>
            <Button
            disabled
             btnType={ButtonType.Link}
             herf='http://www.dingjunjie.com'
            >
                 disabledLink
            </Button>
            </div>
            </TabItem>
           <TabItem label={'Alert测试区'}>
            <Button onClick={()=>{setAlertVisible(alertVisible=true)}}>
                点击alert
            </Button>
           <Alert
            visible={alertVisible}  // 控制弹窗关闭和开启
            onClose={()=>{setAlertVisible(alertVisible=false)}}
            alertType={AlertType.Success} //alert type
            description='成功样式提示'
            />
            </TabItem> 
            <TabItem index={'2'} label={'Icon测试区'}>
              <hr />
           <Icon
            theme={ThemeProps.Primary}
            icon="anchor-circle-check"
            size="6x"
            />
            <hr />
           <Icon
           theme={ThemeProps.Secondary}
            icon="arrow-down"
            size="6x"
            />
            </TabItem> 
            <TabItem label={'Menu测试区'}>
            <Menu 
            defaultIndex={1}
            // mode='vertical'
            onSelect={(index)=>{console.log(index)}}
            defaultOpenSubMenu={['2']}
            >
            <MenuItem >
            一级标题1
            </MenuItem >
            <MenuItem >
            一级标题2
            </MenuItem>
            <SubMenu title='一级标题3'>
            <MenuItem >
            二级标题1
            </MenuItem >
            <MenuItem >
            二级标题2
            </MenuItem >
            <MenuItem >
            二级标题3
            </MenuItem >
            <MenuItem >
            二级标题4
            </MenuItem >
            </SubMenu>
            <SubMenu title='一级标题4' > 
            <MenuItem >
            二级标题5
            </MenuItem >
            <MenuItem >
            二级标题6
            </MenuItem >
            <MenuItem >
            二级标题7
            </MenuItem >
            <MenuItem >
            二级标题8
            </MenuItem >
            </SubMenu>
        </Menu>
            </TabItem>
        </Tabs>

        </>
    )
}

export default App


