import Avatar from '../components/avatar';
import DateFormatter from '../components/date-formatter';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {author && (
        <div className="hidden md:block md:mb-12">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      )}
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage
            title={title}
            src={coverImage}
            height={620}
            width={1240}
          />
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        {author && (
          <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
          </div>
        )}
        {date && (
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        )}
      </div>
    </>
  );
}
