import React from 'react';

 const CardWrapper = () => (
    <div className="card-wrapper">
      <Card
        icon="images/icon-supervisor.svg"
        title="Supervisor"
        description="Monitors activity to identify project roadblocks"
      />
      <Card
        icon="images/icon-team-builder.svg"
        title="Team Builder"
        description="Scans our talent network to create the optimal team for your project"
      />
      <Card
        icon="images/icon-karma.svg"
        title="Karma"
        description="Regularly evaluates our talent to ensure quality"
      />
      <Card
        icon="images/icon-calculator.svg"
        title="Calculator"
        description="Uses data from past projects to provide better delivery estimates"
      />
    </div>
  );