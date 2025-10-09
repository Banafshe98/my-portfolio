import React from 'react'

function Footer() {
  return (
    <>
    <footer class="bg-gray-900">
  <div class="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-12">
   

    <div class="pt-6 mt-12 border-t border-gray-800">
      <div class="text-center sm:flex sm:justify-between sm:text-left">
        <p class="text-sm text-gray-400">
          <span class="block sm:inline">All rights reserved.</span>

          <a
            class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
            href="/"
          >
            Terms & Conditions
          </a>

          <span>&middot;</span>

          <a
            class="inline-block text-teal-500 underline transition hover:text-teal-500/75"
            href="/"
          >
            Privacy Policy
          </a>
        </p>

        <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
          &copy; 2022 Company Name
        </p>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer