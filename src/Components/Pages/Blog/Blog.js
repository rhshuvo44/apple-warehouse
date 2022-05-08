import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container py-5'>
            <h1 className='text-center pb-5'>Question and Answer</h1>
            <CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>Difference between javascript and nodejs</Card.Title>
      <Card.Text>
      JavaScript হল একটি সাধারণ প্রোগ্রামিং ভাষা যা, যেকোনো ব্রাউজারে JavaScript ইঞ্জিন চালায়। যেখানে node js হল একটি JavaScript প্রোগ্রামিং ভাষার জন্য একটি চলমান পরিবেশ যা অনেক বাড়াবাড়ি ধারণ করে, এটির জন্য লাইব্রেরি প্রয়োজন যা ভাল ব্যবহারের জন্য JavaScript প্রোগ্রামিং থেকে সহজেই অ্যাক্সেস করা যেতে পারে।
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>When should you use nodejs and when should you use mongodb</Card.Title>
      <Card.Text>এটি স্টোর ডেটার জন্য ব্যবহৃত হয়। MongoDB হল একটি ডাটাবেস যেখানে আমরা ডেটা সঞ্চয় করতে পারি এবং NodeJS আমাদের ক্লায়েন্ট সাইটটিকে এর সার্ভার সাইটের মাধ্যমে ডাটাবেসের সাথে সংযোগ করতে সাহায্য করে।
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Differences between sql and nosql databases.</Card.Title>
      <Card.Text>SQL ডাটাবেসগুলি উল্লম্বভাবে স্কেলযোগ্য, যখন NoSQL ডেটাবেসগুলি অনুভূমিকভাবে স্কেলযোগ্য। SQL ডাটাবেসগুলি টেবিল-ভিত্তিক, যখন NoSQL ডাটাবেসগুলি নথি, কী-মান, গ্রাফ, বা প্রশস্ত-কলাম স্টোর। SQL ডাটাবেসগুলি বহু-সারি লেনদেনের জন্য ভাল, যখন নথি বা JSON এর মতো অসংগঠিত ডেটার জন্য NoSQL ভাল।
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
            
        </div>
    );
};

export default Blog;