import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
