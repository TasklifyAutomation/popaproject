import { ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ArrowRight, User, Compass, X } from 'lucide-react';

interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
}

interface BlogPostLayoutProps {
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image?: string;
  children: ReactNode;
  relatedPosts?: RelatedPost[];
}

export default function BlogPostLayout({
  category,
  title,
  date,
  readTime,
  excerpt,
  image,
  children,
  relatedPosts = [],
}: BlogPostLayoutProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLightboxImage(null);
        setLightboxAlt('');
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function openLightbox(src: string, alt: string) {
    setLightboxImage(src);
    setLightboxAlt(alt);
  }

  function handleContentClick(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      openLightbox(img.src, img.alt || title);
    }
  }

  return (
    <div className="pt-20 bg-black text-white">
      <style>{`
        .popa-blog-content > div:has(> img) {
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }

        .popa-blog-content > div:has(> img) img {
          max-height: 520px;
          width: 100%;
          object-fit: cover;
          cursor: zoom-in;
        }

        .popa-blog-content img {
          cursor: zoom-in;
        }

        @media (min-width: 1024px) {
          .popa-blog-content > div:has(> img):nth-of-type(even) {
            max-width: 560px;
            margin-left: auto;
            margin-right: 0;
          }

          .popa-blog-content > div:has(> img):nth-of-type(odd) {
            max-width: 620px;
            margin-left: 0;
            margin-right: auto;
          }
        }

        @media (max-width: 768px) {
          .popa-blog-content > div:has(> img) {
            max-width: 100%;
          }

          .popa-blog-content > div:has(> img) img {
            max-height: none;
          }
        }
      `}</style>

      <article className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 opacity-35">
          <div className="absolute top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F9EE6B]/10 blur-[140px]" />
          <div className="absolute bottom-20 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />
        </div>

        <section className="relative pt-10 pb-8 md:pt-16 md:pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-5xl"
            >
              <Link
                to="/blogi"
                className="mb-8 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-[#F9EE6B]"
              >
                <ArrowLeft className="h-4 w-4" />
                Takaisin blogiin
              </Link>

              <span className="mb-6 inline-flex rounded-full bg-[#F9EE6B] px-4 py-2 text-sm font-bold lowercase text-black">
                {category}
              </span>

              <h1 className="mb-7 max-w-5xl text-4xl font-bold leading-[1.03] tracking-tight md:text-6xl lg:text-7xl">
                {title}
              </h1>

              <div className="mb-9 flex flex-wrap items-center gap-4 text-sm text-white/55 md:gap-6 md:text-base">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/5">
                    <User className="h-5 w-5" />
                  </div>
                  <span>Popa tiimi</span>
                </div>

                <span className="h-1 w-1 rounded-full bg-white/35" />

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{date}</span>
                </div>

                <span className="h-1 w-1 rounded-full bg-white/35" />

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{readTime}</span>
                </div>
              </div>

              {image && (
                <button
                  type="button"
                  onClick={() => openLightbox(image, title)}
                  className="mb-8 block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-2xl shadow-black/40"
                  aria-label="Avaa kuva suurempana"
                >
                  <img
                    src={image}
                    alt={title}
                    className="h-auto max-h-[560px] w-full object-cover transition-transform duration-500 hover:scale-[1.015]"
                    loading="eager"
                  />
                </button>
              )}

              <p className="max-w-4xl text-lg leading-relaxed text-white/78 md:text-xl">
                {excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative pb-12 md:pb-16">
          <div className="container-custom">
            <div className="mx-auto max-w-5xl">
              <div
                onClick={handleContentClick}
                className="
                  popa-blog-content
                  prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-3xl md:prose-h2:text-4xl
                  prose-h3:mt-9 prose-h3:text-2xl
                  prose-p:text-white/78 prose-p:leading-[1.75]
                  prose-strong:text-white
                  prose-a:text-[#F9EE6B] prose-a:no-underline hover:prose-a:text-white
                  prose-li:text-white/75
                  prose-ul:my-5
                  prose-table:text-sm
                  prose-th:border-white/10 prose-th:text-white
                  prose-td:border-white/10 prose-td:text-white/75
                  [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_img]:shadow-2xl [&_img]:shadow-black/30
                  [&_.my-10]:my-10
                "
              >
                {children}
              </div>

              <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-2xl shadow-black/30 md:p-10">
                <div className="grid gap-8 md:grid-cols-[120px_1fr] md:items-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#F9EE6B] bg-[#F9EE6B]/10 md:mx-0">
                    <Compass className="h-10 w-10 text-[#F9EE6B]" />
                  </div>

                  <div>
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                      Mitä mieltä sinä olet?
                    </h2>
                    <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/70">
                      Jos markkinointisi kaipaa suuntaa, aloita maksuttomasta kartoituksesta.
                      Vastaamme 24 tunnissa.
                    </p>
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-3 border-b border-[#F9EE6B] pb-1 font-bold text-[#F9EE6B] transition-all hover:gap-5 hover:text-white"
                    >
                      Aloita maksuton kartoitus
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="relative border-t border-white/10 py-16 md:py-20">
            <div className="container-custom">
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                  Seuraavaksi luettavaa
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((post, idx) => (
                    <Link key={idx} to={`/blogi/${post.slug}`} className="group">
                      <motion.div
                        whileHover={{ y: -6 }}
                        className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#F9EE6B]/40 hover:bg-white/[0.06]"
                      >
                        <span className="text-xs font-semibold text-[#F9EE6B]">
                          {post.category}
                        </span>

                        <h3 className="mt-3 mb-4 text-xl font-bold transition-colors group-hover:text-[#F9EE6B]">
                          {post.title}
                        </h3>

                        <div className="flex items-center justify-between text-sm text-white/45">
                          <span>{post.readTime}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </article>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => {
            setLightboxImage(null);
            setLightboxAlt('');
          }}
        >
          <button
            type="button"
            onClick={() => {
              setLightboxImage(null);
              setLightboxAlt('');
            }}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Sulje kuva"
          >
            <X className="h-6 w-6" />
          </button>

          <img
            src={lightboxImage}
            alt={lightboxAlt}
            className="max-h-[88vh] max-w-[92vw] rounded-2xl border border-white/10 object-contain shadow-2xl shadow-black"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}