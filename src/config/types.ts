export interface LawConfig {
    [config: string]: any;

    /**
     * Define the required of the law.
     * note: `omit` will always result in the law not being enforced
     * @default must
     */
    required: 'must'|'should'|'may'|'optional'|'omit';
}

export interface ParsedLawConfig extends LawConfig {
    /**
     * Define the behaviour of a failure.
     * @private
     */
    _throw?: 'error'|'warn'|'info'|null;

    /**
     * @private
     */
    _name: string;

    /**
     * Specificity level used to cascase configurations
     * @private
     */
    _specificity: number;
}

export type severityLevel = 'error'|'warn'|'info'|null;

export interface LawbookConfig {
    /**
     * Define what log level you want to output
     * @default log
     */
    verboseness: 'error'|'warn'|'info'|'debug';

    /**
     * Describe the effect a failure has in a given severity category
     */
    severity: {
        /**
         * @default error
         */
        must: severityLevel;

        /**
         * @default warn
         */
        should: severityLevel;

        /**
         * @default info
         */
        may: severityLevel;

        /**
         * @default info
         */
        optional: severityLevel;
    };

    /**
     * List of law configurations
     */
    laws: {
        [lawName: string]: LawConfig;
    };
}

export interface ParsedLawbookConfig extends LawbookConfig {
    /**
     * @private
     * List of laws and their parsed configurations.
     */
    _laws: ParsedLawConfig[];
}
