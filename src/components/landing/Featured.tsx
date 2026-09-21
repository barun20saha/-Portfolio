"use client";

import React from 'react';
import Container from '../layouts/Container';
import SectionHeading from '../common/SectionHeading';
import RepeatSeparator from '../ui/repeat-separator';
import { GitHubActivity } from '../ui/github-activity';

const Featured = () => {
  return (
    <>
      <RepeatSeparator />
      <SectionHeading heading={'GitHub Activity'} />
      <Container>
        <div className="px-5 py-2">
          <GitHubActivity
            username="barun20saha"
            showMonths={true}
            defaultOpen={false}
          />
        </div>
      </Container>
    </>
  );
};

export default Featured;
