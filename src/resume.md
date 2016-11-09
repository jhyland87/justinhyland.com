---
layout: base.html
model: 
  experience: experience
  general: general
  personal: personal
---
<!-- Resume Timeline Section -->
<section id="experience" class="section-content timeline-content">
<div class="container">
	<!-- Section title -->
	<div class="section-title item_bottom text-center">
		<h1 class="uppercase">Resume</h1>
    <b class="v-line-md"></b>
	</div>
	<!-- End Section title -->
	<div class="row">
		<div class='col-md-5 col-sm-12'>
			<!-- Section Title -->
			<div class="alignRight">
				<h2 class="sub-heading uppercase">Work<br>
				<span class="hlite">Experience</span></h2>
        <div class="separator-md right"></div>
				<h4 class="weight-300 font-alter text-light-dark">I have 10+year experience in this field. You can see here my work history. Lorem ipsum dolor sit amet consectetuer.</h4>
			</div>
			<!-- End Section Title -->
		</div>
		<div class='col-md-7 col-sm-12'>
			<ul class="timeline">
				{{#each model.experience}}
				<li {{#iftt @key 0}}class="open"{{/iftt}}>
						<div class="date">
						<span>{{duration.begin}}</span>
						<span>{{duration.end}}</span>
					</div>
					<div class="circle">
					</div>
					<div class="data">
						<h4 class="title">{{company}}</h4>
						<div class="content row">
							<div class="col-md-12">
								<h5>{{position}}</h5>
								<p>
									{{description}}
								</p>
								{{#if accomplishments.length}}
								<p>
									<ul class="accomplishments">
										{{#each accomplishments}}
											<li>{{this}}</li>
										{{/each}}
									</ul>
								</p>
								{{/if}}
								{{#if environment.length}}
								<p>
									<ul class="environment">
										{{#each environment}}
											<li>{{this}}</li>
										{{/each}}
									</ul>
								</p>
								{{/if}}
							</div>
						</div>
					</div>						
				</li>
				{{/each}}
			</ul>
		</div>
	</div>
	<hr class="bigMargin">
	<!-- Education -->
	<div class="row">
		<div class='col-md-5 col-sm-12'>
			<!-- Section Title -->
			<div class="alignRight">
				<h2 class="sub-heading uppercase"><span class="hlite">Education</span><br>
				&amp; Certifications</h2>
        <div class="separator-md right"></div>
				<h4 class="weight-300 font-alter text-light-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim.</h4>
			</div>
			<!-- End Section Title -->
		</div>
		<div class='col-md-7 col-sm-12'>
			<ul class="timeline">
				<li class="open">
					<div class="date">
						<span>2009</span>
						<span>2008</span>
					</div>
					<div class="circle">
					</div>
					<div class="data">
						<h4 class="title">Masters in Computer Science</h4>
						<div class="content row">
							<div class="col-md-12">
								<h5>Oxford University</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim. Pellentesque auctor ornare urna, volutpat condimentum quam porttitor at. Vestibulum tincidunt diam in eros aliquam luctus.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="date">
						<span>2008</span>
						<span>2004</span>
					</div>
					<div class="circle">
					</div>
					<div class="data">
						<h4 class="title">Bechelors in Computer Science</h4>
						<div class="content row">
							<div class="col-md-12">
								<h5>Oxford University</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim. Pellentesque auctor ornare urna, volutpat condimentum quam porttitor at. Vestibulum tincidunt diam in eros aliquam luctus.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="date">
						<span>2004</span>
						<span>2002</span>
					</div>
					<div class="circle">
					</div>
					<div class="data">
						<h4 class="title">Higher Secondary Certificate</h4>
						<div class="content row">
							<div class="col-md-12">
								<h5>Oxford School &amp; College</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim. Pellentesque auctor ornare urna, volutpat condimentum quam porttitor at. Vestibulum tincidunt diam in eros aliquam luctus.
								</p>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div class="date">
						<span>1999</span>
						<span>2002</span>
					</div>
					<div class="circle">
					</div>
					<div class="data">
						<h4 class="title">Seconday School Certificate</h4>
						<div class="content row">
							<div class="col-md-12">
								<h5>Oxford School &amp; College</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim. Pellentesque auctor ornare urna, volutpat condimentum quam porttitor at. Vestibulum tincidunt diam in eros aliquam luctus.
								</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<!-- END Education -->
	<hr class="bigMargin">
	<div class="row">
		<div class="col-md-12 text-center">
			<h2 class="sub-heading uppercase">Awards &amp; <span class="hlite">Publications</span></h2>
      <div class="separator-md"></div>
			<h4 class="weight-300 font-alter text-light-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas dapibus lectus non dignissim.</h4>
		</div>
	</div>
	<div class="row new-line">
		<div class="col-md-12">
			<div class="col-md-6">
				<div class="award item_left">
					<div class="award-icon">
						<i class="fa fa-trophy icon-lg"></i>
					</div>
					<div class="award-content">
						<h4 class="title">Design Contest - 2012</h4>
						<p>
							Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
						</p>
						<strong>Published on August 21st 2012</strong>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="award item_right">
					<div class="award-icon">
						<i class="fa fa-trophy icon-lg"></i>
					</div>
					<div class="award-content">
						<h4 class="title">Communication Arts - 2013</h4>
						<p>
							Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
						</p>
						<strong>Published on August 21st 2013</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<div class="col-md-6">
				<div class="award item_left">
					<div class="award-icon">
						<i class="fa fa-trophy icon-lg"></i>
					</div>
					<div class="award-content">
						<h4 class="title">London International</h4>
						<p>
							Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
						</p>
						<strong>Published on August 1st 2014</strong>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="award item_right">
					<div class="award-icon">
						<i class="fa fa-book icon-lg"></i>
					</div>
					<div class="award-content">
						<h4 class="title">Graphic Design - 2014</h4>
						<p>
							Sed in porttitor dolor. Sed eleifend vulputate nulla, congue iaculis arcu mattis porta.
						</p>
						<strong>Published on July 23rd 2014</strong>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- DOWNLOAD CV-->
	<div class="row">
		<div class="col-md-12">
			<div class="callOut-box item_top">
				<div class="content">
					<h4 class="uppercase">Want to see my printable resume? Download now.</h4>
				</div>
				<div class="button">
					<a class="btn bt-default btn-fill"><i class="fa fa-cloud-download"></i> Download Resume</a>
				</div>
			</div>
			<div>
			</div>
			<!-- END DOWNLOAD CV-->
		</div>
	</div>
</div>
</section>
<!-- End Resume Timeline Section -->
<!-- End Testimonial Section=============================================== -->