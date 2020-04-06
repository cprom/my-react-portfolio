import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <form>

        <h1>Contact Me</h1>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" aria-describedby="fullName" placeholder="Full Name" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <div class="form-actions text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact 