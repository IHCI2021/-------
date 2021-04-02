import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Form, Input, InputNumber} from 'antd';

//表单样式
const layout2={
  labelCol: { span: 12 },
  wrapperCol: { span: 3 },
}


class Limit extends Component{
    //将值传回父组件state
    input_legal_limit(value){
        this.props.get_legal_limit(value);
      }
      input_promise_limit(value){
        this.props.get_promise_limit(value);
      }
      
    render(){
      const { getFieldDecorator } = this.props.form;
        return(
            <Form>
    <center><h3>审核时限</h3></center>
    <Form.Item
    {...layout2}
      label="法定办结时限（最大为150个工作日）"
      rules={[{ required: true}]}>
      {getFieldDecorator('legal_limit',{ 
         initialValue:this.props.legal_limit,
         rules:[
           {required:true,
           message:'请输入法定办结时限'},
         ]
       })
      (<InputNumber min={1} max={150}
      onChange={this.input_legal_limit.bind(this)} />)}
    </Form.Item>,
    <Form.Item
    {...layout2}
      label="承诺办结时限（最大为150个工作日）"
      rules={[{ required: true}]}>
      {getFieldDecorator('promise_limit',{ 
         initialValue:this.props.promise_limit,
         rules:[
           {required:true,
           message:'请输入承诺办结时限'},
         ]
       })
      (<InputNumber min={1} max={150}
      onChange={this.input_promise_limit.bind(this)} />)}
    </Form.Item>,   
    </Form>
        )
    }



}
export default Limit;