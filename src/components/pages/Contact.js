import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 className="text-end px-5 mb-5 bg-success text-white py-3">Contact Me</h1>
      <div class="container mt-5">
        <h1>Contact Me!</h1>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="firstName" class="form-label"> First Name </label>
            <input type="text" class="form-control" id="firstName" required></input>
          </div>
          <div class="col-md-6">
            <label for="lastName" class="form-label"> Last Name </label>
            <input type="text" class="form-control" id="lastName" required></input>
          </div>

          <div class="col-md-8">
            <label for="emailInfo" class="form-label"> E-mail </label>
            <input type="email" class="form-control" id="emailInfo" required></input>
          </div>

          <div class="col-md-4">
            <label for="phoneNumber" class="form-label"> Phone Number </label>
            <input type="text" class="form-control" id="phoneNumber" ></input>
          </div>

          <div class="col-md-12">
            <label for="coments" class="form-label">Comments</label>
            <textarea class="form-control" id="comments" rows="3"></textarea>
          </div>

          <div class="col-md-12">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>

      <div className="mt-5">

        <p className='px-5'>
          <a href={"mailto: KenCrawford@Fastmail.com"}>Contact Ken by Email</a>
        </p>
      </div>
    </div>
  );
}
