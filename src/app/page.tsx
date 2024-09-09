import React from 'react'

const page = () => {
 return(
<div>
<figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-25 rounded-full mx-auto" src="/RYK profile pic.jpg" alt="" width="384" height="512"></img>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hi! I am Hassan Ahmad From Taranda Saway Khan.I am student of AI. Upcoming coming time is of Ai. So, Ai is one of the best skill Now a days.  ”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Hassan Ahmad
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        AI Student,   Meantech
      </div>
    </figcaption>
  </div>
</figure>
</div>
 )
}

export default page