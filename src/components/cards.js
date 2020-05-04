import React from 'react';

class Cards extends React.Component{
    render() {
      return(
    <div className="h-auto rounded-lg shadow-lg inline-block mx-12 my-10">
        <a class="cursor-pointer" href={this.props.website}>
            <img className="w-full rounded h-40 object-cover" src={this.props.image} alt={this.props.image} />
        </a>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{this.props.name}</div>
          <p className="text-gray-700 text-base">
            {this.props.text}
          </p>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block bg-gray-400 rounded-full px-2 py-1 mx-auto my-auto text-xs font-semibold text-gray-700 mr-2">{this.props.language[0]}</span>
          <span className="inline-block bg-gray-400 rounded-full mx-auto px-2 py-1 my-auto text-xs font-semibold text-gray-700 mr-2">{this.props.language[1]}</span>
          <span className="inline-block bg-gray-400 rounded-full mx-auto px-2 py-1 my--auto  text-xs font-semibold text-gray-700">{this.props.language[2]}</span>
        </div>
      </div>
      );
    }
}


export default Cards;