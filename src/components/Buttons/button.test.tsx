import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button,{ButtonSize,ButtonType,ButtonProps} from './Button';
const defaultProps = {
    onClick:jest.fn()
}
const testProps:ButtonProps={
    btnType:ButtonType.Primary,
    size:ButtonSize.Lg,
    className:'klass'
}
const disabledProps:ButtonProps={
    disabled:true,
    onClick:jest.fn()
}
it('should render the correct default button', () => {
  render(<Button {...defaultProps}>Learn React</Button>);
  const element=screen.getByText('Learn React')
  expect(element).toBeInTheDocument();
  expect(element.tagName).toEqual('BUTTON');
  expect(element).toHaveClass('btn btn-default')
  fireEvent.click(element)
  expect(defaultProps.onClick).toHaveBeenCalled()
});

it('should render the correct components based ondifferent props', () => {
    render(<Button {...testProps}>React</Button>);
    const element=screen.getByText('React')
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass')
    
  });

it('should render a link when btnType equals link and href is provided', () => {
    render(<Button btnType={ButtonType.Link} herf='http://www.dingjunjie.com'>Link</Button>);
    const element=screen.getByText('Link')
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link')
  });

  it('should render disabled button when disabled set to true', () => {
    render(<Button {...disabledProps}>disabled</Button>);
    const element=screen.getByText('disabled')as HTMLButtonElement
    expect(element).toBeInTheDocument() ;
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  });