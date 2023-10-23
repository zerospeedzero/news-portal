import React from 'react';

const Newspaper = () => {
  return (
    <div className="bg-gray-100 p-8 space-y-8">
      <div className="border-b border-gray-500 pb-4">
        <h1 className="text-4xl font-bold">Newspaper Title</h1>
        <p className="text-sm font-semibold text-gray-600">Published on October 18, 2023</p>
      </div>
      
      <div className="space-y-6">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <img src="newspaper-image.jpg" alt="Newspaper Image" className="w-full rounded-lg" />
          </div>
          <div className="w-1/2">
            <p className="text-xl font-semibold">Headline News</p>
            <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod auctor metus, ac laoreet orci facilisis non.</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-semibold">Local News</p>
          <p className="text-sm text-gray-700">Praesent varius dui id justo iaculis ultrices. Suspendisse lacinia sit amet nisl eget sollicitudin.</p>
          <p className="text-sm text-gray-700">Phasellus nec sapien non purus tincidunt vestibulum.</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-semibold">International News</p>
          <p className="text-sm text-gray-700">Aenean dignissim, ex quis tincidunt bibendum, libero odio malesuada dolor.</p>
          <p className="text-sm text-gray-700">Fusce eget mi in odio lacinia interdum.</p>
        </div>
      </div>
      
      <div className="border-t border-gray-500 pt-4 text-sm text-gray-600">
        © 2023 Newspaper Name. All rights reserved.
      </div>
    </div>
  );
};

export default Newspaper;
