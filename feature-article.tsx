import Image from "next/image";
import {
  CalendarIcon,
  Clock3Icon,
  TrendingUp,
  Brain,
  Cpu,
  BarChart3,
} from "lucide-react";

export default function FeatureArticle() {
  return (
    <div>
      {/* Article Header Content */}
      <div className="inset-0 flex flex-col justify-end">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 w-full">
          <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider mb-2">
            TECHNOLOGY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6 font-serif text-balance">
            <span className="italic">
              The Future of Artificial Intelligence:{" "}
            </span>{" "}
            How Machine Learning is Transforming Industries
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/author.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium">By John Doe</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span className="text-sm">March 28, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock3Icon className="h-4 w-4" />
              <span className="text-sm">8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Featured Image */}
      <div className="relative w-full h-[40vh] lg:h-[70vh] mb-12">
        {/* Featured Image */}
        <Image
          src="/top-image.jpg"
          alt="Feature image for article"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8 md:pb-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead">
            Artificial intelligence is no longer a concept of the future—it's
            here, and it's rapidly changing how we live and work. From
            healthcare to finance, transportation to entertainment, AI
            technologies are revolutionizing industries across the globe.
          </p>

          <h2>The Rise of Machine Learning</h2>
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

          <blockquote>
            "AI is the new electricity. Just as electricity transformed almost
            everything 100 years ago, today I actually have a hard time thinking
            of an industry that I don't think AI will transform in the next
            several years." — Andrew Ng, Co-founder of Google Brain
          </blockquote>

          <h2>Transforming Healthcare</h2>

          {/* Left-aligned image */}
          <div className="not-prose float-left mr-6 mb-4 w-full md:w-2/5">
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
          </div>

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

          {/* Redesigned Fact Box without grey backgrounds */}
          <div className="not-prose my-12 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="p-6 md:p-8">
              <h3 className="font-normal uppercase tracking-wider text-sm mb-8 flex items-center text-primary/40 pb-2 font-sans border-b border-primary/10">
                AI by the Numbers
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pb-4 transform transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      $15.7 trillion
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-12">
                    Potential contribution to the global economy by 2030
                  </div>
                </div>

                <div className="pb-4 transform transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">37%</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-12">
                    Of businesses have implemented AI in some form
                  </div>
                </div>

                <div className="pb-4 transform transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <Cpu className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">77%</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-12">
                    Of devices we use feature AI in some form
                  </div>
                </div>

                <div className="pb-4 transform transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full p-2 mr-3">
                      <Brain className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary">83%</div>
                  </div>
                  <div className="text-sm text-muted-foreground pl-12">
                    Of businesses say AI is a strategic priority
                  </div>
                </div>
              </div>

              <div className="text-xs text-primary/40 mt-6 text-right italic border-t border-primary/10 pt-4">
                Source: PwC Global AI Study, 2023
              </div>
            </div>
          </div>

          <h2>Revolutionizing Transportation</h2>

          {/* Right-aligned image */}
          <div className="not-prose float-right ml-6 mb-4 w-full md:w-2/5">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/autonomous-vehicle.jpg"
                alt="Self-driving car technology"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Autonomous vehicles use AI to navigate complex environments
              safely.
            </p>
          </div>

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
                className="text-/**
               * name
               */
              public name() {
                
              } font-semibold font-sans text-primary/90 uppercase"
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
          <h3 className="text-xl mb-6 font-normal">Related Articles</h3>
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
        </div>
      </div>
    </div>
  );
}
