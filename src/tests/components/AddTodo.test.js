import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '../../components/AddTodo';

test('should test AddTodo component', () => {
  const wrapper = shallow(<AddTodo />)
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit handler', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<AddTodo handleAddTodo={onSubmitSpy} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('Form').simulate('submit');
  expect(onSubmitSpy).toHaveBeenCalled();
});
