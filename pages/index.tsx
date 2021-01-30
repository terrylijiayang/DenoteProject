import {Button} from 'antd';
import './index.less'
interface Group {
    name: String;
}
const group1: Group = {
    name: 'hello world',
}
export default () => <Button type='primary'>{group1.name}!</Button>
