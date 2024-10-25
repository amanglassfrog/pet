import React from 'react'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

const page = () => {
  return (
      <>
<Navbar/>          <section className="bg-gray-50   flex  w-full">
      <div className="container px-4 py-4 mx-auto flex  flex-col ">
     <h1 className='text-3xl font-bold pb-2'>Terms and Conditions</h1>
<p className='text-xl pb-2'>Welcome to <strong>PurePetCare</strong>!</p>

<p className='pb-2'>These terms and conditions outline the rules and regulations for using the <strong>PurePetCare</strong> website, located at <strong>PurePetCare</strong>.com, which is owned by <strong>Zapmedics IT Private Limited</strong> and operated as a subsidiary.</p>

<p className='pb-2'>By accessing and using <strong>PurePetCare</strong>.com, you accept these terms and conditions. Do not continue to use <strong>PurePetCare</strong> if you do not agree to all the terms and conditions stated here.</p>

<h2 className=' text-xl pb-2'>1. Definitions</h2>
<ul>
    <li className='pb-2'> 1.1 “Website” refers to <strong>PurePetCare</strong>.com.</li>
    <li className='pb-2'>1.2 “We”, “Our”, and “Us” refer to <strong>PurePetCare</strong> and its parent company, <strong>Zapmedics IT Private Limited</strong>.</li>
    <li className='pb-2'>1.3 “Products” refer to all pet care items sold on the Website, including pet shampoos, paw cleaners, and deodorizers.</li>
    <li>1.4“User” or “You” refers to any individual or entity accessing the Website.</li>
</ul>

<h2 className=' text-xl pb-2'>2. Use of the Website</h2>
<ul>
    <li className='pb-2'>2.1 Users must be at least 18 years old or have parental permission to use this Website.</li>
    <li className='pb-2'>2.2 By using the Website, you agree to use it solely for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use of the Website by any third party.</li>
    <li>2.3Any unauthorized use of the Website may give rise to a claim for damages or constitute a criminal offense.</li>
</ul>

<h2 className=' text-xl pb-2'>3. Intellectual Property</h2>
<ul>
    <li className='pb-2'>3.1 All content on the Website, including but not limited to text, graphics, logos, and images, is the property of <strong>Zapmedics IT Private Limited</strong> and/or its affiliates.</li>
    <li>3.2 You may not reproduce, distribute, or use the content of the Website without express written permission from <strong>Zapmedics IT Private Limited</strong>.</li>
</ul>

<h2 className=' text-xl pb-2'>4. Products and Services</h2>
<ul>
    <li className='pb-2'>4.1 <strong>PurePetCare</strong> offers pet care products, including pet shampoos, paw cleaners, and deodorizers.</li>
    <li className='pb-2'>4.2 We strive to ensure product descriptions are accurate; however, we do not guarantee that product descriptions or other content on the Website are error-free.</li>
    <li>4.3 All products sold are subject to availability, and we reserve the right to discontinue any product at any time.</li>
</ul>

<h2 className=' text-xl pb-2'>5. Pricing and Payment</h2>
<ul>
    <li className='pb-2'>5.1 Prices for products are displayed on the Website and are subject to change without notice.</li>
    <li className='pb-2'>5.2 Payments are accepted through secure third-party payment processors, and we do not store payment information on our servers.</li>
    <li>5.3 By placing an order, you agree to pay the listed price, plus any applicable taxes and shipping charges.</li>
</ul>

<h2 className=' text-xl pb-2'>6. Shipping and Delivery</h2>
<ul>
    <li className='pb-2'>6.1 We deliver products within the geographical areas specified on our Website. Delivery timelines are estimates and may vary based on location and external factors.</li>
    <li>6.2 We are not liable for delays in delivery caused by third-party carriers or circumstances beyond our control.</li>
</ul>

<h2 className=' text-xl pb-2'>7. Returns and Refunds</h2>
<ul>
    <li className='pb-2'>7.1 If you are not satisfied with your purchase, you may request a return or exchange within 15 days of receipt.</li>
    <li className='pb-2'>7.2 To be eligible for a return, products must be unused, in their original packaging, and accompanied by proof of purchase.</li>
    <li>7.3 We reserve the right to refuse returns that do not meet our return policy criteria. Refunds will be processed through the original payment method.</li>
</ul>

<h2 className=' text-xl pb-2'>8. Disclaimer of Warranties and Limitation of Liability</h2>
<ul>
    <li className='pb-2'>8.1 The Website and products are provided “as is” without warranties of any kind, express or implied.</li>
    <li className='pb-2'>8.2 We do not guarantee that the Website will be error-free, uninterrupted, or free from viruses or other harmful components.</li>
    <li>8.3 In no event shall <strong>Zapmedics IT Private Limited</strong>, its affiliates, or subsidiaries be liable for any indirect, incidental, or consequential damages arising out of or related to the use of the Website or products purchased.</li>
</ul>

<h2 className=' text-xl pb-2'>9. Indemnification</h2>
<ul>
    <li>9.1 You agree to indemnify, defend, and hold harmless <strong>Zapmedics IT Private Limited</strong>, its affiliates, and subsidiaries from any claims, liabilities, damages, costs, or expenses (including legal fees) arising from your use of the Website or any violation of these terms.</li>
</ul>

<h2 className=' text-xl pb-2'>10. Privacy</h2>
<p>10.1 Our Privacy Policy governs how we collect, store, and use user data. By using our Website, you agree to the terms of our Privacy Policy.</p>

<h2 className=' text-xl pb-2'>11. Governing Law and Jurisdiction</h2>
<ul>
    <li className='pb-2'>11.1 These terms are governed by and construed in accordance with the laws of [Specify Jurisdiction, e.g., India].</li>
    <li>11.2 You agree to submit to the exclusive jurisdiction of the courts in [Specify Location, e.g., New Delhi, India] for the resolution of any disputes arising from these terms.</li>
</ul>

<h2 className=' text-xl pb-2'>12. Amendments</h2>
<p>12.1 <strong>Zapmedics IT Private Limited</strong> reserves the right to modify these Terms and Conditions at any time without prior notice. Changes will be posted on this page, and continued use of the Website constitutes acceptance of these changes.</p>

<h2 className=' text-xl pb-2'>13. Contact Us</h2>
<ul>
    <li className='pb-2'>Email: <a href="mailto:support@<strong>PurePetCare</strong>.com">support@<strong>PurePetCare</strong>.com</a></li>
    <li>Address: Jumpstart Tower, 2nd floor, Haridwar Bypass Rd, opp. Nilaya Hills, Saraswati Vihar, Ajabpur Kalan, Dehradun, Uttarakhand 248001.</li>
                  </ul></div></section>
          <Footer/>
      </>
  )
}

export default page