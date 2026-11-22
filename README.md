# শিশুদের বাংলা, ইংরেজি, গণিত ও আরবি শিক্ষা অ্যাপ (Chrome Microphone Ready)

এই আপডেটে Chrome ব্রাউজারে মাইক্রোফোন অনুমতি ও রেকর্ডিং আরও নির্ভরযোগ্য করা হয়েছে:
1. **Chrome Microphone Permission Check & Request:** `navigator.permissions` এবং `getUserMedia` অডিও কনস্ট্রেন্ট (echoCancellation, noiseSuppression, autoGainControl) যুক্ত করা হয়েছে।
2. **স্পষ্ট Chrome অনুমতি বার্তা:** অনুমতি ব্লক থাকলে বা `https://` / `localhost` না হলে ঠিক কী করতে হবে তা সরাসরি স্ক্রিনে দেখানো হয়।
3. **অডিও ফাইল আপলোড ফলব্যাক:** কোনো কারণে মাইক্রোফোন ব্যবহার করা না গেলে অভিভাবক যাচাইকরণের পর যেকোনো অডিও ফাইল (`audio/*`) যুক্ত করা যায়।

## GitHub ও Chrome-এ চালানোর নিয়ম
1. জিপ ফাইলটি আনজিপ করুন (`kids_learning_app` ফোল্ডার পাবেন)।
2. GitHub রিপোজিটরিতে `kids_learning_app` এর ফাইলগুলো (`index.html`, `README.md`) আপলোড করুন।
3. **Settings → Pages** থেকে Branch `main` সিলেক্ট করে Save করুন (`https://...` লিংক চালু হবে)।
4. Chrome-এ লিংক খুলে ভয়েস পরিবর্তনের সময় **Allow** চাপুন; আগে ব্লক হয়ে থাকলে অ্যাড্রেস বারের বামের আইকন → **Site settings → Microphone → Allow** দিন।