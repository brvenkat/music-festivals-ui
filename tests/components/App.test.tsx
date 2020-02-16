import * as React from 'react'
import { mount } from 'enzyme'
import { App } from '../../src/components/App'
import wait from 'waait'
import { Festivals } from '../../src/components/Festivals'

describe('App', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
          resolve({
              status: 200,
              ok: true,
              json: () => new Promise((resolve) => {
                  resolve({
                    festivals: [
                    {
                      recordName: 'record-1',
                      bands: [
                        {
                          name: 'band-1',
                          festivals: ['festival-1']
                        }
                      ]
                    }
                  ]});
              })
          });
      });
    })
  })
  it('Should create valid snapshot', () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Should render all components correctly', async () => {
    const wrapper = mount(<App />)
    expect(window.fetch).toHaveBeenCalled()
    await wait()
    wrapper.update()
    expect(wrapper.find(Festivals).props().festivals).toEqual([
      {
        recordName: 'record-1',
        bands: [
          {
            name: 'band-1',
            festivals: ['festival-1']
          }
        ]
      }
    ])
  })
})