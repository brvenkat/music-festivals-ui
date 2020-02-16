import * as React from 'react'
import { mount } from 'enzyme'
import { Festivals } from '../../src/components/Festivals'
import * as mock from '../mockData/mock'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

describe('Festivals ', () => {
  const mockFestival: any = mock.apiResponse
  it('should render the component correctly ', () => {
    const wrapper = mount(<Festivals festivals={mock.apiResponse} />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should render all components correctly ', () => {
    const wrapper = mount(<Festivals festivals={mock.apiResponse} />)
    expect(wrapper.find('div').at(0).text()).toEqual('Music Festival Data')
    expect(wrapper.find(Card).at(0).text()).toContain('record-1')
    expect(wrapper.find(CardContent).at(0).text()).toContain('name-1')
    expect(wrapper.find(CardContent).at(1).text()).toContain('festival-1')
    expect(wrapper.find(Card).at(1).text()).toContain('record-2')
    expect(wrapper.find(Card).at(1).find(CardContent).at(0).text()).toContain('name-2')
    expect(wrapper.find(Card).at(1).find(CardContent).at(0).text()).toContain('festival-1')
    expect(wrapper.find(Card).at(1).find(CardContent).at(0).text()).toContain('festival-2')
  })
})