import React, { Component } from 'react';
import data from './data'
import {Card} from 'antd'
class Book extends Component {
  render() {
    return (
      <div className="index">
        {
          data.map((item,index) => {
            return (
              <Card
                key={item.title}
                title={item.title}
                type='inner'
              >
                <div
                  dangerouslySetInnerHTML = {{
                    __html: item.content
                  }}
                >
                </div>
              </Card>
            )
          })
        }
      </div>
    );
  }
}

export default Book
