import Image from "next/image";
import { Button } from "./components/ui/button";
import { Mail } from "lucide-react";

export default function FeatureArticleWatch() {
  return (
    <div className="watch font-body">
      {/* Article Header Content */}
      <div className="inset-0 flex flex-col justify-end">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 w-full">
          {/* <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
            TECHNOLOGY
          </p> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 md:mb-12 font-heading break-words hyphens-auto">
            <span className="italic">
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
                  <span className="text-sm font-bold text-foreground">John Doe Junior Hansen Jensen</span>
                  <span className="text-sm text-muted-foreground">13. september 2024 kl. 16.31</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-wrap gap-2">
                {/* LinkedIn */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 gap-2 rounded-full hover:border-transparent group/linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  {/* <span className="text-muted-foreground group-hover/linkedin:text-foreground hidden md:block">LinkedIn</span> */}
                </Button>


                {/* Microsoft Teams */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 gap-2 rounded-full hover:border-transparent group/teams"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M19.2 4.4C19.2 2.9 17.9 1.6 16.4 1.6C14.9 1.6 13.6 2.9 13.6 4.4C13.6 5.9 14.9 7.2 16.4 7.2C17.9 7.2 19.2 5.9 19.2 4.4ZM20 8H12.8C12.8 9.8 11.4 11.2 9.6 11.2C7.8 11.2 6.4 9.8 6.4 8H0V17.6C0 19.1 1.2 20.4 2.8 20.4H20.8C22.3 20.4 23.6 19.1 23.6 17.6V11.6C23.6 9.6 22 8 20 8ZM9.6 8C8.7 8 8 7.3 8 6.4C8 5.5 8.7 4.8 9.6 4.8C10.5 4.8 11.2 5.5 11.2 6.4C11.2 7.3 10.5 8 9.6 8ZM20.4 4.8H19.6V4H18.8V4.8H18V5.6H18.8V6.4H19.6V5.6H20.4V4.8Z" />
                  </svg>
                  {/* <span className="text-muted-foreground group-hover/teams:text-foreground hidden md:block">Teams</span> */}
                </Button>

                {/* Email */}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-10 gap-2 rounded-full hover:border-transparent group/email"
                >
                  <Mail className="size-5" />
                  {/* <span className="text-muted-foreground group-hover/email:text-foreground hidden md:block">Email</span> */}
                </Button>

              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="flex flex-col realtive w-full items-center">
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

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="max-w-4xl mx-auto px-4">
            <p className="lead text-muted-foreground text-xl md:text-2xl my-12">
              Artificial intelligence is no longer a concept of the future—it's
              here, and it's rapidly changing how we live and work. From
              healthcare to finance, transportation to entertainment, AI
              technologies are revolutionizing industries across the globe.
            </p>


            <p className="first-letter:float-left first-letter:mr-3 first-letter:md:text-8xl first-letter:text-7xl first-letter:leading-none first-letter:font-heading first-letter:text-foreground first-letter:font-thin first-line:uppercase first-line:tracking-wider">
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

            <h2>Transforming Healthcare</h2>

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
              <svg className="mb-2 h-16 md:h-20 opacity-5 absolute -top-6 -left-10" viewBox="0 0 48 31"><g fill="fill-foreground"><path d="M0 28.361c8.575-3.848 12.584-8.355 12.362-13.191A5.066 5.066 0 0 1 8.8 16.379c-4.343 0-7.461-3.078-7.461-8.135C1.337 3.077 5.68 0 10.8 0c5.568 0 10.691 3.847 10.691 11.433C21.494 21.326 13.921 28.361.779 31Z"></path><path d="M26.506 28.361c8.575-3.847 12.585-8.355 12.362-13.191a5.066 5.066 0 0 1-3.564 1.209c-4.343 0-7.461-3.078-7.461-8.135C27.843 3.077 32.186 0 37.309 0 42.877 0 48 3.847 48 11.433 48 21.327 40.427 28.362 27.285 31Z"></path></g></svg>
              <blockquote className="font-heading text-3xl border-none p-0 m-0 text-foreground">
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

            <h2>Revolutionizing Transportation</h2>

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
          </div>

          <div className="flex flex-col relative w-full items-center">
            <div className="relative w-full h-[40vh] lg:h-[720px] max-w-[calc(100%-32px)] xl:max-w-screen-xl">
              {/* Featured Image */}
              <Image
                src="/autonomous-vehicle.jpg"
                alt="Self-driving car technology"
                fill
                className="object-cover m-0"
              />
              <p className="text-sm text-muted-foreground hidden 2xl:block 2xl:w-[200px] 2xl:absolute 2xl:bottom-0 2xl:right-[-216px] m-0">
                Autonomous vehicles use AI to navigate complex environments
                safely.
              </p>
            </div>
            <p className="text-sm text-muted-foreground mt-2 2xl:hidden max-w-4xl mx-auto px-4 w-full">
              Autonomous vehicles use AI to navigate complex environments
              safely.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 pb-8 md:pb-12">
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

            <h2>The Future of Work</h2>
            <p>
              As AI continues to advance, questions about its impact on employment
              loom large. While some jobs will undoubtedly be automated, history
              suggests that technological revolutions tend to create more jobs
              than they eliminate.
            </p>

            <aside className="md:ml-10 md:mb-10 relative md:float-right md:clear-both 2xl:-mr-60 md:w-96 py-6 px-5 border-t">
              <h1 className="font-semibold font-body text-foreground uppercase text-base">Leverandører på SKI 02.15 It-rådgivning</h1>
              <div className="font-body text-base *:font-body *:text-base prose-ol:p-0 text-muted-foreground prose-ul:p-0 prose-li:relative prose-li:z-0 prose-li:pb-0.5 prose-li:pl-2 prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-0.875 prose-li:before:z-10 prose-li:before:h-0.875 prose-li:before:w-0.875 prose-li:before:rounded-full prose-li:before:bg-primary prose prose-gray hyphens-manual break-words">
                <ul className="list-disc list-inside text-sm">
                  <li>Accenture A/S</li>
                  <li>Capgemini Danmark</li>
                  <li>Deloitte</li>
                  <li>Emagine Consulting</li>
                  <li>EY</li>
                  <li>Globeteam</li>
                  <li>Implement Consulting Group</li>
                  <li>Netcompany</li>
                  <li>PA Consulting Group</li>
                  <li><span><span className="hyphens-auto">Pricewaterhousecoopers </span></span></li>
                  <li>Trifork</li>
                  <li>Venzo</li>
                  <li>(Konsortium) Epico-it, Sopra Steria, J.H. Schultz Information, A-2, Wingmen Solution</li>
                  <li>(Konsortium) Devoteam, Optimumit, Trustworks, Twoday</li>
                </ul>
              </div>

            </aside>

            <p>
              The key will be adaptation. Workers will need to develop skills that
              complement AI rather than compete with it. Creativity, emotional
              intelligence, critical thinking, and complex problem-solving will
              become increasingly valuable.
            </p>

            <h2>Ethical Considerations</h2>
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

            <h2>Conclusion</h2>
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
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t max-w-4xl mx-auto px-4 pb-8 md:pb-12">
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
                className="font-semibold font-body text-foreground uppercase"
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
        {/* <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-6">Related Articles</h3>
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
                  <h4 className="group-hover:text-primary transition-colors font-normal">
                    How AI is Changing the Future of Work
                  </h4>
                  <p className="text-sm text-muted-foreground">March 20, 2025</p>
                </div>
              ))}
            </div>
          </div> */}
      </div>
    </div>
  );
}
