import React from 'react';

class SkillsCard extends React.Component{
    render() {
      return(
        <div className="flex items-center mx-4 h-14 my-4 border border-gray-300 rounded-lg shadow">
        <img className=" ml-5 w-5 h-5 gatsby-image-wrapper" src={this.props.image} alt={this.props.name} />
        <div className="flex-1 px-2 py-4">
          <div className="font-semibold text-xs text-gray-900">{this.props.name}</div>
          <p className="text-gray-800 text-xs">
            {this.props.text}
          </p>
        </div>
      </div>
      );
    }
  };

export default SkillsCard;