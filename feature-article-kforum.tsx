import Image from "next/image";

export default function FeatureArticleKforum() {
  return (
    <div className="kforum font-body">
      {/* Article Header Content */}
      <div className="inset-0 flex flex-col justify-end">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 w-full">
          <p className="text-xs font-black text-foreground uppercase mb-2">
            TECHNOLOGY
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-heading break-words hyphens-auto font-black">
            <span className="text-[#3317db] italic">
              The Future of Artificial Intelligence:{" "}
            </span>{" "}
            How Machine Learning is Transforming Industries
          </h1>

          <div className="flex font-body justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative size-10 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src="/author.jpg"
                    alt="Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black">John Doe</span>
                  <span className="text-sm text-muted-foreground">13. september 2024</span>
                </div>
              </div>
            </div>
            <div>
              <span className="size-10 rounded-full text-muted-foreground block"></span>
            </div>
          </div>
        </div>

        {/* Hero Section with Featured Image */}
        <div className="flex flex-col realtive w-full items-center mb-12">
          <div className="relative w-full h-[40vh] lg:h-[720px] max-w-screen-xl">
            {/* Featured Image */}
            <Image
              src="https://photos.watchmedier.dk/watchmedier/resize:fill:1080:0:0/plain/https://photos.watchmedier.dk/Images/18058638/m25t5u/ALTERNATES/master-3_2/france-eu-parliament"
              alt="Feature image for article"
              fill
              className="object-cover object-top"
              priority
            />
            <p className="text-sm text-muted-foreground hidden 2xl:block 2xl:w-[200px] 2xl:absolute 2xl:bottom-0 2xl:right-[-216px]">
              Ursula von der Leyen, President of the European Commission, speaks
              during a session of the European Parliament in Strasbourg, France.
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-2 2xl:hidden max-w-4xl mx-auto px-4">
            Ursula von der Leyen, President of the European Commission, speaks
            during a session of the European Parliament in Strasbourg, France.
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 pb-8 md:pb-12">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-muted-foreground">
              Artificial intelligence is no longer a concept of the future—it's
              here, and it's rapidly changing how we live and work. From
              healthcare to finance, transportation to entertainment, AI
              technologies are revolutionizing industries across the globe.
            </p>

            <h2 className="font-black">The Rise of Machine Learning</h2>
            <p>
              Machine learning, a subset of artificial intelligence, has seen
              exponential growth in recent years. This technology allows computers
              to learn from data and improve over time without being explicitly
              programmed. The implications are vast and far-reaching.
            </p>

            <p>
              Companies like Google, Amazon, and Microsoft have invested billions
              in developing machine learning capabilities. These investments are
              paying off as AI systems become increasingly sophisticated and
              capable of handling complex tasks.
            </p>

            <h2 className="font-black">Transforming Healthcare</h2>

            {/* Left-aligned image */}
            {/* <div className="not-prose float-left mr-6 mb-4 w-full md:w-2/5">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/in-article-image.jpg"
                alt="AI in healthcare"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              AI-powered diagnostic tools can detect patterns invisible to the
              human eye.
            </p>
          </div> */}

            <p>
              In healthcare, AI is being used to diagnose diseases, develop new
              drugs, and personalize treatment plans. Machine learning algorithms
              can analyze medical images with remarkable accuracy, often detecting
              conditions that human doctors might miss.
            </p>

            <p>
              The potential applications are vast. AI systems can predict patient
              deterioration before traditional monitoring systems detect a
              problem. They can analyze genetic information to identify potential
              health risks and recommend preventative measures. And they can help
              researchers identify promising drug candidates much faster than
              traditional methods.
            </p>

            <aside className="m-10 relative max-w-prose md:float-left md:clear-both 2xl:-ml-60 md:w-96">
              <svg className="mb-2 h-7 fill-[#3317db]" viewBox="0 0 48 31"><g><path d="M0 28.361c8.575-3.848 12.584-8.355 12.362-13.191A5.066 5.066 0 0 1 8.8 16.379c-4.343 0-7.461-3.078-7.461-8.135C1.337 3.077 5.68 0 10.8 0c5.568 0 10.691 3.847 10.691 11.433C21.494 21.326 13.921 28.361.779 31Z"></path><path d="M26.506 28.361c8.575-3.847 12.585-8.355 12.362-13.191a5.066 5.066 0 0 1-3.564 1.209c-4.343 0-7.461-3.078-7.461-8.135C27.843 3.077 32.186 0 37.309 0 42.877 0 48 3.847 48 11.433 48 21.327 40.427 28.362 27.285 31Z"></path></g></svg>
              <blockquote className="font-heading text-3xl border-none p-0 m-0 font-black text-prose-headings">
                I actually have a hard time thinking of an industry that I don't think AI will transform in the next several years.
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">Andrew Ng, Co-founder of Google Brain</p>
            </aside>

            <p>
              Companies like PathAI are using machine learning to improve
              diagnostic accuracy, while others like Atomwise are using AI to
              speed up drug discovery. The potential for AI to save lives and
              reduce healthcare costs is enormous.
            </p>

            <p>
              Beyond diagnostics, AI is transforming patient care through
              personalized treatment recommendations, predictive analytics for
              hospital resource management, and even robotic surgery assistants
              that help surgeons perform procedures with greater precision.
            </p>

            <h2 className="font-black">Revolutionizing Transportation</h2>

            <p>
              Self-driving cars represent one of the most visible applications of
              AI. Companies like Tesla, Waymo, and Cruise are developing
              autonomous vehicles that promise to make transportation safer, more
              efficient, and more accessible.
            </p>

            <p>
              The technology behind autonomous vehicles is incredibly complex,
              combining computer vision, sensor fusion, and deep learning to
              create systems that can navigate unpredictable environments. These
              vehicles use cameras, radar, and lidar to create a detailed map of
              their surroundings, then use AI to make split-second decisions about
              how to respond to changing conditions.
            </p>

            <div className="not-prose my-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src="/autonomous-vehicle.jpg"
                  alt="Self-driving car technology"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs lg:text-sm text-muted-foreground mt-2 text-center">
                Autonomous vehicles use AI to navigate complex environments
                safely.
              </p>
            </div>

            <p>
              The potential benefits of self-driving technology extend far beyond
              convenience. Studies suggest that widespread adoption of autonomous
              vehicles could:
            </p>

            <ul>
              <li>Reduced traffic accidents and fatalities</li>
              <li>Decreased congestion and commute times</li>
              <li>Increased mobility for elderly and disabled individuals</li>
              <li>Lower transportation costs through ride-sharing</li>
            </ul>

            <p>
              Beyond cars, AI is transforming logistics and supply chain
              management. Algorithms can optimize shipping routes, predict
              maintenance needs, and manage inventory with unprecedented
              efficiency. Companies like Amazon use AI to predict what products
              customers will order before they even place an order, allowing them
              to position inventory strategically and reduce delivery times.
            </p>

            <h2 className="font-black">The Future of Work</h2>
            <p>
              As AI continues to advance, questions about its impact on employment
              loom large. While some jobs will undoubtedly be automated, history
              suggests that technological revolutions tend to create more jobs
              than they eliminate.
            </p>

            <p>
              The key will be adaptation. Workers will need to develop skills that
              complement AI rather than compete with it. Creativity, emotional
              intelligence, critical thinking, and complex problem-solving will
              become increasingly valuable.
            </p>

            <h2 className="font-black">Ethical Considerations</h2>
            <p>
              The rapid advancement of AI raises important ethical questions.
              Issues of privacy, bias, accountability, and control need to be
              addressed as these technologies become more integrated into our
              lives.
            </p>

            <p>
              Organizations like the Partnership on AI and the IEEE Global
              Initiative on Ethics of Autonomous and Intelligent Systems are
              working to develop guidelines and standards for the responsible
              development of AI.
            </p>

            <h2 className="font-black">Conclusion</h2>
            <p>
              Artificial intelligence and machine learning are transforming
              industries at an unprecedented pace. While challenges remain, the
              potential benefits—from improved healthcare outcomes to more
              efficient transportation—are enormous.
            </p>

            <p>
              As we move forward, collaboration between technologists,
              policymakers, and the public will be essential to ensure that AI
              develops in ways that benefit humanity as a whole.
            </p>
          </article>

          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/author.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3
                  className="font-black font-body text-foreground uppercase"
                >
                  John Doe
                </h3>
                <p className="text-muted-foreground">
                  John is a technology journalist with over 10 years of experience
                  covering artificial intelligence and emerging technologies. He
                  holds a Master's degree in Computer Science from MIT.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-6 font-black">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group cursor-pointer">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg mb-3">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Article ${item}`}
                      alt={`Related article ${item}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h4 className="group-hover:text-primary transition-colors font-black">
                    How AI is Changing the Future of Work
                  </h4>
                  <p className="text-sm text-muted-foreground">March 20, 2025</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
