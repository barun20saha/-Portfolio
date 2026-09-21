import SectionHeading from '../common/SectionHeading';

const BioText = () => {
  return (
    <>
      <SectionHeading heading="About" />
      <div className="space-y-5 px-5 py-4">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-base font-normal whitespace-pre-wrap text-neutral-800 md:text-base dark:text-neutral-300">
          <ul className="list-disc space-y-2 pl-4">
            <li>
              I'm a{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                B.Tech CSE student
              </b>{' '}
              passionate about Data Science, Artificial Intelligence, Machine Learning, and Computer Vision.
            </li>
            <li>
              I enjoy building practical technology solutions and exploring modern AI models and tools.
            </li>
            <li>
              I have experience with academic projects, AI/ML experimentation, hackathons, and an IEEE CIS internship focusing on Computer Vision and Deep Learning.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BioText;
