import React, { useState } from 'react'
import Footer from '../components/common/Footer';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const articles = [
        {
            id: 1,
            image: "/images/projectImages/crisis24_behance_1920X1200_carte.webp",
            date: "October 3 2025",
            title: "Writing an Article with ChatGPT: A Deep Dive into Mise en Abyme",
            tags: ["Account"],
        },
        {
            id: 2,
            image: "/images/projectImages/PJC_SiteK72_Thumbnail_1280x960.webp",
            date: "May 9 2025",
            title: "PREDICTIVE ADVERTISING: AI REVOLUTIONIZES TARGETING",
            tags: ["Tech & AI"],
        },
        {
            id: 3,
            image: "/images/projectImages/OKA_thumbnail.webp",
            date: "October 3 2025",
            title: "Writing an Article with ChatGPT: A Deep Dive into Mise en Abyme",
            tags: ["Design", "Tech & AI"],
        },
        {
            id: 4,
            image: "/images/projectImages/opto_thumbnail2.webp",
            date: "May 9 2025",
            title: "PREDICTIVE ADVERTISING: AI REVOLUTIONIZES TARGETING",
            tags: ["Tech & AI"],
        },
        {
            id: 5,
            image: "/images/projectImages/thumbnailimage_OSM.webp",
            date: "july 8 2026",
            title: "Consulting & client relations: a duo that isn't briefed, it's built.",
            tags: ["Account","Design"],
        },
    ];

    const filteredArticles = activeCategory === 'All' ? articles : articles.filter((article) => article.tags.includes(activeCategory));
    return (
         <>
       <div className="min-h-screen bg-white lg:pt-[15vw] pt-[100px] text-black font-sans px-4 sm:px-8 py-6">
      {/* Header Title */}
      <div className="flex items-center gap-2 text-xs text-black mb-2">
        <h1 className='lg:text-[15vw] text-[20vw] font-bold'>BLOG</h1>
      </div>

      {/* Categories Header */}
      <header className="flex items-center pb-4 text-sm font-medium">
        <div className="flex items-center lg:gap-2 gap-1 flex-wrap">
          <span className="text-black font-semibold mr-1">Categories:</span>
          
          {['All', 'Design', 'Tech & AI', 'Account'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                activeCategory === cat 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 font-[font2] gap-8 mt-8">
        {filteredArticles.map((article) => (
          <article key={article.id} className="flex flex-col group cursor-pointer">
            <div className="overflow-hidden rounded-3xl aspect-[4/3] bg-gray-100 mb-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center gap-2 text-xs text-black mb-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>{article.date}</span>
            </div>
            <h2 className="lg:text-4xl text-2xl tracking-none uppercase mb-4 leading-none">
              {article.title}
            </h2>
            <div className="flex items-center gap-2 mt-auto">
              {article.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 px-3 py-1 rounded-md text-xs text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
        <div className='pt-30'>
            <Footer/>
        </div>
           </>
    )
}

export default Blog