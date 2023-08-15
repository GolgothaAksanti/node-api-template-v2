import dotenv from 'dotenv';
import twilioClient from '@src/core/plugin/twilio/config';
import { ITwilioResponse } from '@src/core/interfaces/twilioInterface';

dotenv.config();

const { TWILIO_SERVICE_ID, TWILIO_CHANEL } = process.env;

class TwilioService {
  protected service_id = TWILIO_SERVICE_ID;

  protected channel = TWILIO_CHANEL;

  async sendVerificationCode(phonenumber: string): Promise<ITwilioResponse> {
    return new Promise((resolve, reject) => {
      try {
        const result = twilioClient.verify
          .services(`${this.service_id}`)
          .verifications.create({
            to: phonenumber,
            channel: `${this.channel}`,
          });

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  async verifyCode(
    phonenumber: string,
    code: string
  ): Promise<ITwilioResponse> {
    return new Promise((resolve, reject) => {
      try {
        const result = twilioClient.verify
          .services(`${this.service_id}`)
          .verificationChecks.create({ to: phonenumber, code });

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default TwilioService;
